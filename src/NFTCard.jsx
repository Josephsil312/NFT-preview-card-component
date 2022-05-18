import React from 'react'
import image1 from './images/image1.jpg'
import image2 from './images/image2.png'
import './card.css'
const NFTCard = () => {
    return (
        <div className="card">
            <div className="cardContainer">
                <img src={image1} alt="logo" className="logo" />
                <h1 className="heading">Equilibrium #3429</h1>
                <p className="para">Our Equilibrium collection promotes balance and calm.</p>
                <div className="items">
                    <div className="eth">0.041ETH</div>
                    <div className="days">3 days left</div>
                </div>
                <hr className='hor'></hr>
                <div className="profile">
                    <img src={image2} alt="profile" className="profileimage" />
                    <div className="text">Creation of <span className='changeColor'>Jules Wwyvern</span></div>
                </div>
            </div>
        </div>
    )
}

export default NFTCard