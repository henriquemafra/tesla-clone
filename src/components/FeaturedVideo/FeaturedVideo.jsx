import React from "react";
import './FeaturedVideo.css'

function FeaturedVideo () {
    return (
        <div className="FeaturedVideo">
        <video autoPlay muted loop>
          <source
          src="https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Homepage-Demo-Drive-Desktop-NA.mp4"
          type="video/mp4"
          />
        </video>

        </div>
    )
}

export default FeaturedVideo