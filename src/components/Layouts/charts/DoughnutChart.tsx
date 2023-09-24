import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { hexToRgbA } from "@/utils/functions";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughnutChart(props: {
    title: string,
    chartData: any[] | undefined,
    types: { value: string, label: string }[],
    colorList: string[]
}) {
    const {
        title,
        chartData,
        types,
        colorList
    } = props

    let selectedColors: string[] = [] //Used to prevent duplicates
    const colorData = types.map(_ => {
        let randomColor = colorList[Math.floor(Math.random()*colorList.length)]

        //While loop if colors ever equal in random value
        while (selectedColors.includes(randomColor)) {
            randomColor = colorList[Math.floor(Math.random()*colorList.length)]
        }

        const bg = hexToRgbA(randomColor, 1)
        const border = hexToRgbA(randomColor, 0.2)

        selectedColors?.push(randomColor)

        return {
            bg: bg,
            border: border,
            hex: randomColor
        }
    })

    const data = {
        labels: types.map(expense => expense.label),
        datasets: [
            {
                data: chartData,
                backgroundColor: colorData?.map(color => color.bg),
                borderColor: colorData?.map(color => color.border),
                borderWidth: 2,
            },
        ],
    }

    return (
        <div>
            <p style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "left"
            }}>
                {title}
            </p>

                {chartData ?
                    <Doughnut plugins={[(ChartDataLabels as any)]} data={data}
                              options={{ maintainAspectRatio: true }} />
                    :
                    <p style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlign: "center"
                    }}>
                        No Data Found
                    </p>
                }
        </div>
    )
}