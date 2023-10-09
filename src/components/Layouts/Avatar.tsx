import "./Avatar.css"
import Image from "next/image";
import { Icon } from "@/components/Melody/src/components/Layouts/Icon";

export const Avatar = (props: {
    size?: string,
    image: string | undefined,
    rounded?: boolean,
    ring?: boolean
}) => {
    const {
        size = 'medium',
        image,
        rounded = true,
        ring = true
    } = props

    //TODO props like adding ring, size, variant (could this be ring?)?

    return (
        <div className={`melody-avatar-container melody-relative ${size}`}>
            {image ?
                <Image className={`melody-avatar ${rounded && 'melody-rounded-full'} ${ring && 'ring'}`}
                       src={image}
                       fill={true}
                       alt="Bordered avatar" />
                :
                <div className={`melody-avatar-preview ${rounded && 'melody-rounded-full'} ${ring && 'ring'}`}>
                    <Icon icon={'melody-org'} additionalClasses={"melody-text-black-0"} />
                </div>
            }
        </div>

    )
}