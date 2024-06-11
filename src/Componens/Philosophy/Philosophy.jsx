import React from 'react'
import './Philosophy.css'
import services from './services.svg'
import community from './community.svg'
import knowldge from './knowldge.svg'
import sprituality from './sprituality.svg'

export default function Philosophy() {
  return (
    <div>
         <section className="philosophy">

<div className="title">
    <h1>OUR PHILOSOPHY</h1>
</div>
        
        <div className="cards">
            <div className="single-card">
                <img src={sprituality} alt="" />
                <h2><a href="#">KNOWLDGE</a></h2>
                <p>A critshahal component
                    of every Muslims journey is
                    knowledge.</p>
            </div>
            <div className="single-card">
                <img src={knowldge} alt="" />
                <h2><a href="#">SPIRTUALITY</a></h2>
                <p>A critshahal component
                    of every Muslims journey is
                    knowledge.</p>
            </div>
            <div className="single-card">
                <img src={community} alt="" />
                <h2><a href="#">COMMUNITY</a></h2>
                <p>A critshahal component
                    of every Muslims journey is
                    knowledge.</p>
            </div>
            <div className="single-card">
                <img src={services} alt="" />
                <h2><a href="#">SERVICES</a></h2>
                <p>A critshahal component
                    of every Muslims journey is
                    knowledge.</p>
            </div>
        </div>
        <div className="view-more">
            <button className="view-more-btn">View More</button>
        </div>






    </section>

    </div>
  )
}
