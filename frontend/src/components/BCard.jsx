import React, { useRef, useEffect } from 'react';
import CarouselCustomNav from './CarouselCustomNav';


const carouselImages = [
    "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const BCard = ({ title, srclink, description, buttonText }) => {
    const titleRef = useRef(null);

    useEffect(() => {
        const titleElement = titleRef.current;
        if (titleElement) {
            const textLength = titleElement.textContent.length;
            const fontSize = Math.max(16, 32 - textLength * 0.5); // Adjust formula as needed
            titleElement.style.fontSize = `${fontSize}px`;
        }
    }, [title]);

    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body items-center text-center">
                <h1 ref={titleRef} className="whitespace-nowrap overflow-hidden text-ellipsis w-full">
                    {title}
                </h1>
                <figure className="px-0 pt-5">
                    {/* <img
                        src={srclink}
                        alt="Card image"
                        className="rounded-xl"
                    /> */}
                    <CarouselCustomNav images={carouselImages} />
                </figure>
                <p className="text-wrap">{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default BCard;

