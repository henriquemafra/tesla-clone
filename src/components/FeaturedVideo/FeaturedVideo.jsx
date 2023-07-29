import React from "react";
import './FeaturedVideo.css'

function FeaturedVideo () {
    return (
      <>

      <div>
        <div className="FeaturedVideo">
        <video autoPlay muted loop>
          <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
          type="video/mp4"
          />
        </video>
        </div>
        <div className="featured-information">
         <h1>Experience Tesla</h1>
         <p>Schedule a Demo Drive Today</p>
        </div>
        
        </div>
        <div className="featured-button">
        <a href="/">
        <button>
          Demo Drive
        </button>
        </a>
      </div>
      </>
    )
}

export default FeaturedVideo