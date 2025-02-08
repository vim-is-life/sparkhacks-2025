import React, { useRef, useEffect } from 'react';

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
                    <img
                        src={srclink}
                        alt="Card image"
                        className="rounded-xl"
                    />
                </figure>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default BCard;

