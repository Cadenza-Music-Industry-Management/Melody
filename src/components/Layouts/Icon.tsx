import React from 'react';
import "./Icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faXmark,
    faCheck,
    faBars,
    faWindowMaximize,
    faMagnifyingGlass,
    faRotate,
    faCaretDown,
    faCaretUp,
    faStar,
    faHeart,
    faCircleQuestion,
    faQuestion,
    faRightLong,
    faLeftLong,
    faComment,
    faComments,
    faShare,
    faThumbsUp,
    faThumbsDown,
    faAt,
    faLock,
    faPeopleGroup,
    faSignature,
    faUserTie, //TODO username
    faMoneyBillTrendUp, //Income
    faMoneyBillTransfer, //Expense
    faAnglesRight, //Pagination Next
    faAnglesLeft, //Pagination Last
    faEllipsis, //Multiple uses: Pagination, what else?
    faEllipsisVertical, //Settings
} from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/free-regular-svg-icons';
import {
    faTiktok,
    faTwitter,
    faInstagram,
    faYoutube,
    faFacebook,
    faSoundcloud,
    faCcStripe
} from '@fortawesome/free-brands-svg-icons'
import {IconProps} from "../types";

export const Icon = (props: IconProps) => {
    const {
        size = 'medium',
        icon,
        additionalStyles,
        additionalClasses
    } = props

    const faIconMap: any = {
        solidX: faXmark, //TODO need solid naming?
        solidCheck: faCheck,
        solidBars: faBars,
        website: faWindowMaximize,
        magnifyingGlass: faMagnifyingGlass,
        rotate: faRotate,
        caretDown: faCaretDown,
        caretUp: faCaretUp,
        star: faStar,
        heart: faHeart,
        circleQuestion: faCircleQuestion,
        question: faQuestion,
        arrowRight: faRightLong,
        arrowLeft: faLeftLong,
        comment: faComment,
        comments: faComments,
        share: faShare,
        thumbsUp: faThumbsUp,
        thumbsDown: faThumbsDown,
        income: faMoneyBillTrendUp,
        expenses: faMoneyBillTransfer,
        paginationRight: faAnglesRight,
        paginationLeft: faAnglesLeft,
        solidEllipsis: faEllipsis,
        solidEllipsisVertical: faEllipsisVertical,
        email: faAt,
        password: faLock,
        firstName: faSignature,
        lastName: faPeopleGroup,
        username: faUserTie,
        //Social media
        tiktok: faTiktok,
        twitter: faTwitter,
        instagram: faInstagram,
        youtube: faYoutube,
        facebook: faFacebook,
        soundcloud: faSoundcloud,
        stripe: faCcStripe,
    }

    return (
        <div className={"melody-flex"}>
            {icon.includes('melody-') ?
                <i style={{...additionalStyles}} className={`melody-icon icomoon ${icon} ${additionalClasses ? additionalClasses : ''}`} />
                :
                <FontAwesomeIcon style={{...additionalStyles}} className={additionalClasses ? additionalClasses : ''} icon={faIconMap[icon]} />
            }
        </div>
    )
}