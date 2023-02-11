import React from "react";
import "../../Assets/styles/Counter.css";

export default function Counter() {
  return (
    <>
      <section className="counter">
        <div className="counter-div">
          <h1 data-aos="fade-left" className="counter-box">
            100+ <br />
            <span>MEMBER's</span>
          </h1>
          <h1 data-aos="fade-up" className="counter-box">
            100+ <br />
            <span>MEMBER's</span>
          </h1>
          <h1 data-aos="fade-right" className="counter-box">
            100+ <br />
            <span>MEMBER's</span>
          </h1>
        </div>
      </section>
    </>
  );
}
