import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>
                    Lorem ipsum do lor sit amet, consectetur adipiscing elit. Donec
                    hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec hendrerit vehicula est, in
                    consequat.</p>
                <p>
                    Lorem ipsum do lor sit amet, consectetur adipiscing elit. Donec
                    hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Donec hendrerit vehicula est, in
                    consequat.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;
