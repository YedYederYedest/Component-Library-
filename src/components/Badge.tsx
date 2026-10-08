import type {ReactNode} from 'react';
import classNames from 'classnames';

type BadgeProps = {
    children: ReactNode;
    className?: string;
    shape:string,
    color?:string,
    [key: string]: any;
}
export default function Badge({ children, className, shape, color, ...props }: BadgeProps)
{
    const shapeClass = shape && `button-${shape}`;
    const colorClass = color && `badge-${color}`;
    const allClasses = classNames(shapeClass, colorClass, className);

    return(
        <button className={allClasses} {...props}>
            {children}
        </button>
    )
}