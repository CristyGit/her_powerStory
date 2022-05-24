import React from "react";
import Carousel from 'react-instagram-carousel';

const images = [
    '/images/fin1.jpg',
    '/images/fin2.jpg',
    '/images/fin3.jpg'
];

function RecentPostMoney() {
    return (
        <div className="container center-content has-top-divider reveal-from-right" style={{marginTop: "50px"}}>
            <h1>Recent Posts</h1>
            <div style={{width: '1100px', height: '600px'}}>
                <Carousel images={images} />
            </div>
        </div>
    );
}

export default RecentPostMoney;