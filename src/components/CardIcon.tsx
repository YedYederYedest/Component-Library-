type CardIconProps = {
    color?: string;
    iconImage: string;
    [key: string]: any;
}

export default function CardIcon({color, iconImage}: CardIconProps)
{
    return (
        <div className={`card-icon-${color}`}>
            <div className={`card-icon-${iconImage}`}></div>
        </div>
    );
}
