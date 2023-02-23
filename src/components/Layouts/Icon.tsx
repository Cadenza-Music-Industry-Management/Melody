import React from 'react';
import "./Icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX, faCheck, faBars } from '@fortawesome/free-solid-svg-icons';
// import { fa } from '@fortawesome/free-regular-svg-icons';
import {IconProps} from "../types";

export const Icon = (props: IconProps) => {
    const {
        size = 'medium',
        icon,
        additionalStyles,
        additionalClasses
    } = props

    const faIconMap: any = {
        solidX: faX,
        solidCheck: faCheck,
        solidBars: faBars
        //TODO will need to import and add here any font awesome icons I want
    }

    // const melodyIconNames = [
    //     'melody-artist',
    //     'melody-artist-management',
    //     'melody-group',
    //     'melody-join-group',
    //     'melody-label',
    //     'melody-owner'
    // ]

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