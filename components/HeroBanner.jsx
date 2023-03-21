import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="mag-des" style={{ fontWeight: "bold", color: "#3A3845" }}>{heroBanner.smallText}</p>
        <h3 style={{fontFamily: "Helvetica Neue", color: "#F5EDDC" }}>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)}  className="hero-banner-image" />

        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5 style={{fontFamily: "Helvetica Neue", fontSize: "20px", fontWeight: "bold"}}>Description</h5>
            <p style={{ fontFamily: "Fira sans", color: "#EDF1D6" }}>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
