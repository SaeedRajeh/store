import React from 'react';
import './home.styles.scss';
const Home = () =>(
    <div className="home">
        <div className="directory-menu">
            {/* ITEM */}
            <dir className="menu-item">
                <div className="content">
                    <h1 className="title">HATS</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </dir>
            {/* END OF ITEM */}
            {/* ITEM */}
            <dir className="menu-item">
                <div className="content">
                    <h1 className="title">JACKETS</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </dir>
            {/* END OF ITEM */}
            {/* ITEM */}
            <dir className="menu-item">
                <div className="content">
                    <h1 className="title">SNEAKERS</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </dir>
            {/* END OF ITEM */}
            {/* ITEM */}
            <dir className="menu-item">
                <div className="content">
                    <h1 className="title">WOMENS</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </dir>
            {/* END OF ITEM */}
            {/* ITEM */}
            <dir className="menu-item">
                <div className="content">
                    <h1 className="title">MENS</h1>
                    <span className="sub-title">SHOP NOW</span>
                </div>
            </dir>
            {/* END OF ITEM */}
        </div>
    </div>
);
export default Home;