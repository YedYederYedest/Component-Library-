import type {ReactNode} from 'react';

type TestimonialNoPicProps = {
    children: ReactNode;
    name: string;
    title: string;
    brand: string;
    logoImage: string;
    [key: string]: any;
}

export default function TestimonialNoPic({children, name, title, brand, logoImage}: TestimonialNoPicProps)
{
    return(
            <div className={"testimonial-no-pic"} >
        <div className="testimonial-no-pic-container">
            <img src={`${logoImage}`} alt={`${brand} logo`} className={`${brand}-logo-desktop`} />
            <p>
            {children}
            </p>
            <div className="testimonial-no-pic-signature">
                <div className="testimonial-no-pic-name">
                {name}
                </div>
                <img src="\assets\Divider.png" alt="divider" className="divider-image" />
                <div className ="testimonial-no-pic-title">
                {title}
                </div>
            </div>
        </div>
        <div className="dot-pattern">
        </div>
    </div>
    )
}