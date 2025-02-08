import React from 'react';

function BCard() {

    const srclink = "https://images.axios.com/z_2A95PhQxEOOLJFf10q0JjuDlI=/0x284:1925x1367/1920x1080/2023/05/10/1683744693451.jpg";
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
        <figure className="px-10 pt-10">
            <img
            src={srclink}
            alt="Shoes"
            className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
    );
}

export default BCard;