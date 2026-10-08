import type { ReactNode } from 'react';

type CardTitleProps = {
    children: ReactNode;
}

export default function CardTitle({children}: CardTitleProps)
{
    return(
        <h3 className="card-title">
            {children}
        </h3>
    )
}