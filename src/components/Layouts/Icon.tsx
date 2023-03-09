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
import {
    MelodyAccounting, MelodyArchive, MelodyArtist, MelodyArtistManagementOrg, MelodyArtistOrg,
    MelodyBin,
    MelodyBlogPost,
    MelodyCalendar,
    MelodyContent,
    MelodyContentManagement,
    MelodyCSV,
    MelodyEmail,
    MelodyFavorite,
    MelodyFileStorage,
    MelodyHistory,
    MelodyHome,
    MelodyImage,
    MelodyInfo,
    MelodyJoinOrg,
    MelodyLabel,
    MelodyLegal,
    MelodyLinks,
    MelodyMerchandise,
    MelodyOrg,
    MelodyOrgTools,
    MelodyOwner,
    MelodyPaymentSettings,
    MelodyPlanningBoard,
    MelodyPricing,
    MelodyPromotion,
    MelodyPublicSite,
    MelodyRead,
    MelodyReleases,
    MelodySettings,
    MelodySiteBuilder,
    MelodyStaffManagement,
    MelodyTools,
    MelodyVisibility
} from "@/components/Melody/src/components/Layouts/IcomoonExports";

export const Icon = (props: IconProps) => {
    const {
        size = 'medium',
        icon,
        additionalStyles,
        additionalClasses,
        containerType = 'flex'
    } = props

    const faIconMap: any = {
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

    //TODO using bad method of individual SVGs until I can get icomoon font working in NextJS Cadenza app (works in storybook??)
    //<i style={{...additionalStyles}} className={`melody-icon icomoon ${icon} ${additionalClasses ? additionalClasses : ''}`} />
    const melodyIconMap: any = {
        'melody-accounting': MelodyAccounting,
        'melody-archive': MelodyArchive,
        'melody-artist': MelodyArtist,
        'melody-artist-management': MelodyArtistManagementOrg,
        'melody-artist-org': MelodyArtistOrg,
        'melody-bin': MelodyBin,
        'melody-blog-post': MelodyBlogPost,
        'melody-calendar': MelodyCalendar,
        'melody-content': MelodyContent,
        'melody-content-management': MelodyContentManagement,
        'melody-csv': MelodyCSV,
        'melody-email': MelodyEmail,
        'melody-favorite': MelodyFavorite,
        'melody-file-storage': MelodyFileStorage,
        'melody-history': MelodyHistory,
        'melody-home': MelodyHome,
        'melody-image': MelodyImage,
        'melody-info': MelodyInfo,
        'melody-join-org': MelodyJoinOrg,
        'melody-label': MelodyLabel,
        'melody-legal': MelodyLegal,
        'melody-link': MelodyLinks,
        'melody-merchandise': MelodyMerchandise,
        'melody-org': MelodyOrg,
        'melody-org-tools': MelodyOrgTools,
        'melody-owner': MelodyOwner,
        'melody-payment-settings': MelodyPaymentSettings,
        'melody-kanban': MelodyPlanningBoard,
        'melody-pricing': MelodyPricing,
        'melody-promotion': MelodyPromotion,
        'melody-public-site': MelodyPublicSite,
        'melody-read': MelodyRead,
        'melody-releases': MelodyReleases,
        'melody-settings': MelodySettings,
        'melody-site-builder': MelodySiteBuilder,
        'melody-staff-management': MelodyStaffManagement,
        'melody-tools': MelodyTools,
        'melody-visibility': MelodyVisibility
    }

    //TODO 'color' does not work using direct SVG now instead of font for Melody icons, need to use 'fill' instead

    function getMelodyIcon() {
        const Component = melodyIconMap[icon]
        if (!Component) return;


        return <Component style={{...additionalStyles}} className={`melody-icon ${additionalClasses ? additionalClasses : ''}`} />
    }

    //TODO For custom icons, additionalClasses does not override properties such as font size that is defined in melody-icon but additionalStyles does
    return (
        <div className={containerType === 'flex' ? 'melody-flex melody-justify-center' : 'melody-contents'}>
            {icon.includes('melody-') ?
                getMelodyIcon()
                :
                <FontAwesomeIcon style={{...additionalStyles}} className={additionalClasses ? additionalClasses : ''} icon={faIconMap[icon]} />
            }
        </div>
    )
}