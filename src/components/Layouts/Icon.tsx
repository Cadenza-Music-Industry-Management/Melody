'use client'

import "./Icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faPlus,
    faXmark,
    faCheck,
    faCopy,
    faBars,
    faLocationDot,
    faWindowMaximize,
    faMagnifyingGlass,
    faRotate,
    faCaretRight,
    faCaretLeft,
    faCaretDown,
    faCaretUp,
    faStar,
    faClock,
    faHeart,
    faCircleQuestion,
    faQuestion,
    faDownload,
    faCalendar,
    faRightLong,
    faLeftLong,
    faRotateRight,
    faRotateLeft,
    faArchive,
    faComment,
    faComments,
    faShare,
    faThumbsUp,
    faThumbsDown,
    faSpinner,
    faAt,
    faEdit,
    faRefresh,
    faSearch,
    faLock,
    faPeopleGroup,
    faPlay,
    faPause,
    faSignature,
    faBan,
    faImage,
    faDesktop,
    faList,
    faListOl,
    faCode,
    faFileCode,
    faShoppingCart,
    faQuoteLeft,
    faCalculator,
    faGear,
    faArrowTurnDown,
    faAlignLeft,
    faExpand,
    faVolumeUp,
    faUserTie, //TODO username
    faMoneyBillTrendUp, //Income
    faMoneyBillTransfer, //Expense
    faAnglesRight, //Pagination Next
    faAnglesLeft, //Pagination Last
    faEllipsis, //Multiple uses: Pagination, what else?
    faEllipsisVertical //Settings
} from "@fortawesome/free-solid-svg-icons";
import {
    faStar as faStarOutline
} from "@fortawesome/free-regular-svg-icons"
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
        icon,
        additionalStyles,
        additionalClasses,
        onClick
    } = props

    const faIconMap: any = {
        plus: faPlus,
        solidX: faXmark,
        solidCheck: faCheck,
        solidBars: faBars,
        copy: faCopy,
        website: faWindowMaximize,
        magnifyingGlass: faMagnifyingGlass,
        rotate: faRotate,
        play: faPlay,
        pause: faPause,
        caretRight: faCaretRight,
        caretLeft: faCaretLeft,
        caretDown: faCaretDown,
        caretUp: faCaretUp,
        star: faStar,
        starOutline: faStarOutline,
        archive: faArchive,
        heart: faHeart,
        spinner: faSpinner,
        circleQuestion: faCircleQuestion,
        question: faQuestion,
        arrowRight: faRightLong,
        arrowLeft: faLeftLong,
        rotateArrowRight: faRotateRight,
        rotateArrowLeft: faRotateLeft,
        comment: faComment,
        comments: faComments,
        download: faDownload,
        share: faShare,
        clock: faClock,
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
        arrowTurnDown: faArrowTurnDown,
        alignLeft: faAlignLeft,
        image: faImage,
        gear: faGear,
        calculator: faCalculator,
        edit: faEdit,
        bulletList: faList,
        numberList: faListOl,
        code: faCode,
        blockCode: faFileCode,
        quoteLeft: faQuoteLeft,
        locationDot: faLocationDot,
        shoppingCart: faShoppingCart,
        volumeUp: faVolumeUp,
        expand: faExpand,
        altCalendar: faCalendar,
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
        <div className={`melody-flex melody-justify-center ${onClick ? 'melody-cursor-pointer' : ''}`} onClick={() => { if (onClick) onClick() }}>
            {icon.includes('melody-') ?
                <i style={{...additionalStyles}} className={`melody-icon ${isStorybook ? 'melody-custom-font-storybook-hack' : 'melody-custom-font'} ${icon} ${additionalClasses ? additionalClasses : ''}`} />
                :
                <FontAwesomeIcon style={{...additionalStyles}} className={additionalClasses ? additionalClasses : ''} icon={faIconMap[icon]} />
            }
        </div>
    )
}