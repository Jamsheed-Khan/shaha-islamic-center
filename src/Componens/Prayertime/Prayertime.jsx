import React from 'react'
import './Prayertime.css'

export default function Prayertime() {
  return (
    <div>
        <section>
        <div className="prayers">
            <div className="prayer-time">
                
                <h1 className="">PRAYER TIMES</h1>
                <p>Prayer time in Karachi</p>
                <p>Thu 23 May</p>

              <div>
                <div>
                    <h4>FAJR</h4><span>04:35AM</span>
                </div>
                <div>
                    <h4>DHUHR</h4><span>04:35AM</span>
                </div>
                <div>
                    <h4>ASR</h4><span>04:35AM</span>
                </div>
                <div>
                    <h4>MAGHRIB</h4><span>04:35AM</span>
                </div>
                <div>
                    <h4>ASHAA</h4><span>04:35AM</span>
                </div>
              

                {/* <!-- <h4>FAJR  04:00 AM</h4>
                <h4>DHUHR</h4>
                <h4>ASR</h4>
                <h4>MAGHRIB</h4>
                <h4>ASHAA</h4> --> */}
                <p>Powered By Muslim Pro</p>
              </div>
            </div>
            <div className="qoutes">
                <div>
                    
                
                <h1>WELCOME TO THE ISLAMIC CENTER</h1>
                <p>The Shaha is not just a mosque for prayers rather it is a community center for all.
                    The Center is committed to preserving an Islamic identity, building and
                    supporting a viable Muslim community, promoting a comprehensive Islamic 
                    way of life based on the Holy Quran and the
                    Sunnah of Prophet Muhammad</p>

                <button>Read More</button>

                </div>



            </div>





        </div>

    </section>
    </div>
  )
}
