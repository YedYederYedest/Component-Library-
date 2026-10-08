import type {ReactNode} from 'react';
import {useContext} from 'react';
import {BannerContext} from './Banner.tsx';

type BannerButtonProps = {
    children: ReactNode;
    color:string,
    iconImage:string,
    [key: string]: any;
}

export default function BannerButton({children, color, iconImage}: BannerButtonProps)
{
    const {toggle} = useContext(BannerContext);

    if(!useContext(BannerContext)) {
        throw new Error('BannerButton must be used within a Banner component');
    }

    return(
        <button className={`banner-button banner-button-${color}`} onClick={toggle}>
            <img src={iconImage} alt="Banner Icon" className="banner-button-icon" />
            {children}
        </button>   
    )
}   