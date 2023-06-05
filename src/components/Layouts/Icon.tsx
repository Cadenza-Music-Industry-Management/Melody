import React from 'react';
import "./Icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faXmark,
    faCheck,
    faBars,
    faWindowMaximize,
    faMagnifyingGlass,
    faRotate,
    faCaretRight,
    faCaretLeft,
    faCaretDown,
    faCaretUp,
    faStar,
    faHeart,
    faCircleQuestion,
    faQuestion,
    faRightLong,
    faLeftLong,
    faRotateRight,
    faRotateLeft,
    faComment,
    faComments,
    faShare,
    faThumbsUp,
    faThumbsDown,
    faAt,
    faEdit,
    faRefresh,
    faSearch,
    faLock,
    faPeopleGroup,
    faSignature,
    faBan,
    faImage,
    faDesktop,
    faList,
    faListOl,
    faCode,
    faFileCode,
    faQuoteLeft,
    faCalculator,
    faUserTie, //TODO username
    faMoneyBillTrendUp, //Income
    faMoneyBillTransfer, //Expense
    faAnglesRight, //Pagination Next
    faAnglesLeft, //Pagination Last
    faEllipsis, //Multiple uses: Pagination, what else?
    faEllipsisVertical //Settings
} from "@fortawesome/free-solid-svg-icons";
import {
    faTiktok,
    faTwitter,
    faInstagram,
    faYoutube,
    faFacebook,
    faSoundcloud,
    faCcStripe,
    faSpotify,
    faApple,
    faAmazon,
    faDeezer,
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
        plus: faPlus,
        solidX: faXmark, //TODO need solid naming?
        solidCheck: faCheck,
        solidBars: faBars,
        website: faWindowMaximize,
        magnifyingGlass: faMagnifyingGlass,
        rotate: faRotate,
        caretRight: faCaretRight,
        caretLeft: faCaretLeft,
        caretDown: faCaretDown,
        caretUp: faCaretUp,
        star: faStar,
        heart: faHeart,
        circleQuestion: faCircleQuestion,
        question: faQuestion,
        arrowRight: faRightLong,
        arrowLeft: faLeftLong,
        rotateArrowRight: faRotateRight,
        rotateArrowLeft: faRotateLeft,
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
        desktop: faDesktop,
        email: faAt,
        search: faSearch,
        refresh: faRefresh,
        password: faLock,
        firstName: faSignature,
        lastName: faPeopleGroup,
        username: faUserTie,
        ban: faBan,
        image: faImage,
        calculator: faCalculator,
        edit: faEdit,
        bulletList: faList,
        numberList: faListOl,
        code: faCode,
        blockCode: faFileCode,
        quoteLeft: faQuoteLeft,
        //Social media
        tiktok: faTiktok,
        twitter: faTwitter,
        instagram: faInstagram,
        youtube: faYoutube,
        facebook: faFacebook,
        soundcloud: faSoundcloud,
        stripe: faCcStripe,
        spotify: faSpotify,
        apple: faApple,
        amazon: faAmazon,
        deezer: faDeezer
    }

    //Note to load icons for Storybook because next/font doesn't work correctly yet
    const isStorybook = typeof document !== 'undefined' && document.querySelector("html")?.dataset.isStorybook

    return (
        <div className={'melody-flex melody-justify-center'}>
            {icon.includes('melody-') ?
                <i style={{...additionalStyles}} className={`melody-icon ${isStorybook ? 'melody-custom-font-storybook-hack' : 'melody-custom-font'} ${icon} ${additionalClasses ? additionalClasses : ''}`} />
                :
                <FontAwesomeIcon style={{...additionalStyles}} className={additionalClasses ? additionalClasses : ''} icon={faIconMap[icon]} />
            }
        </div>
    )
}