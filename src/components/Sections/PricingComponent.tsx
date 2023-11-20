"use client"

import Image from "next/image";
import { Icon } from "../Layouts/Icon";
import { Label } from "@/components/Melody/src/components/Layouts/Label";
import { motion } from "framer-motion";
import { Button } from "@/components/Melody/src/components/Inputs/Button";
import { PricingComponentProps } from "@/components/Melody/src/components/types";

export const PricingComponent = (props: PricingComponentProps) => {

    const {
        tierDetails,
        tierSelection,
        onTierSelection
    } = props

    //tier.title !== "Adagio" && currentOrgTier === "Adagio"

    return (
        <div className="melody-max-w-6xl melody-flex melody-flex-col md:melody-flex-row melody-gap-16 melody-mx-auto">
             {tierDetails.map((tier, index) => (
                <motion.div whileHover={{scale: 0.98}} key={index} className={`melody-w-full md:melody-w-1/3 md:melody-max-w-none melody-bg-white melody-flex melody-flex-col melody-p-8 melody-shadow-main melody-rounded`}>
                    <div className="melody-w-full melody-flex-grow">
                        <div className={"melody-text-center melody-border-b melody-border-b-gray-200 melody-py-2"}>
                            {tier.logo && <Image src={tier.logo} alt={tier.title} style={{width: "100%", minWidth: 150, maxWidth: 250}} />}
                            {tier.price && <Label label={tier.price} size={'xlarge'} bold={true} />}
                            {tier.yearlyPrice && <Label label={tier.yearlyPrice} size={'medium'} />}

                            {tier.showPricingButtons &&
                              <div className={"melody-flex melody-gap-x-2 melody-h-8 melody-my-2"}>
                                  <Button label={"Checkout Monthly"}
                                          onClick={() => {
                                              if (onTierSelection) onTierSelection(`${tier.title}_monthly`)
                                          }}
                                          color={tierSelection === `${tier.title}_monthly` ? "primary" : "secondary"}
                                          size={"small"}
                                          variant={"solid"} />

                                  <Button label={"Checkout Yearly"}
                                          onClick={() => {
                                              if (onTierSelection) onTierSelection(`${tier.title}_yearly`)
                                          }}
                                          color={tierSelection === `${tier.title}_yearly` ? "primary" : "secondary"}
                                          size={"small"}
                                          variant={"solid"} />
                              </div>
                            }
                        </div>

                        <ul className="melody-text-sm melody-my-4">
                            {tier.items && tier.items.length > 0 && tier.items?.map((item, index) => (
                                <li key={index} className="melody-leading-tight melody-mb-3 melody-flex">
                                    <Icon icon={'solidCheck'} additionalClasses={'melody-text-green-600 melody-p-0.5 melody-pr-2'} />
                                    <p>
                                        {item.text}
                                        {item?.subText &&
                                          <span className={"melody-text-gray-400 melody-text-xs"}>
                                              {" "}{item.subText}
                                            </span>
                                        }
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </div>
    )
}