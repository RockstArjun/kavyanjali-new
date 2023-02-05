import React from 'react'
import "../../Assets/styles/Home.css";
import kvjCalligraphy from "../../Assets/images/kvjHindi.png";

export default function Home() {
  return (
    <>
    <section className='home'>
      <div className='labels'>
          <img src={kvjCalligraphy} alt='' />
      </div>
    </section>
    </>
  )
}
