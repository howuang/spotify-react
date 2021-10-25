import React from 'react';
import ballon from './images/balloon.png'

const Section1 = () =>{
    return <section id="section1"> 
        <div className="container"> 
            <div className="content">
                <div className="text">
                    <div className="title1">SPOTIFY PREMIUM</div>
                    <div className="title2">Get 3 months of Premium for free</div>
                    <div className="description">
                        Enjoy ad-free music, offline listening, and more. Cancel anytime.
                    </div>
                    <button className="button">GET 3 MONTHS FREE</button>
                    <div className="note">
                        Individual plan only. Only $9.99/month after. Offer not available to
                        users who already tried Premium. Terms and conditions apply. Offer ends
                        Dec 31, 2020.
                    </div>
                </div>
            </div>
            <div> 
                <img src={ballon} />
            </div>
        </div>
    </section>
}

export default Section1;