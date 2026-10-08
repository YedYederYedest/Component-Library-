import type {ReactNode} from 'react';
import {useContext} from 'react';
import { BannerContext } from './Banner.tsx';

type BannerDropdownProps = {
    children: ReactNode;
    [key: string]: any;
}

export default function BannerDropdown({children}: BannerDropdownProps){
    const { open } = useContext(BannerContext);

    if(!useContext(BannerContext)) {
        throw new Error('BannerDropdown must be used within a Banner component');
    }

    return open ? (
        <div className="banner-dropdown">
            {children}
        </div>
    ) : null;
}