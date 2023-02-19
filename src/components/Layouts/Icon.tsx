import React from 'react';
import "./Icon.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons';
import {IconProps} from "../types";

export const Icon = (props: IconProps) => {
    const {
        size = 'medium',
        icon,
        additionalStyles,
        additionalClasses
    } = props

    const cadenzaIconMap: any = {
        solidX: faX
    }

    // const melodyIconNames = [
    //     'melody-artist',
    //     'melody-artist-management',
    //     'melody-group',
    //     'melody-join-group',
    //     'melody-label',
    //     'melody-owner'
    // ]

    //TODO using FontAwesome currently crashes app with babel configuration errors, so waiting on configuring for now and using our own icons

    return (
        <div className={"melody-flex"}>
            {icon.includes('melody-') &&
                <i style={{...additionalStyles}} className={`melody-icon icomoon ${icon} ${additionalClasses ? additionalClasses : ''}`} />
            }
            {/*<FontAwesomeIcon color={color} icon={faIconMap[icon]} />*/}
        </div>
    )
}