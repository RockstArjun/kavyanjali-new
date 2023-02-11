import React from "react";
import "../../Assets/styles/About.css";
import kvjLogo from "../../Assets/images/kvjLogo.jpg";
export default function About() {
  return (
    <>
      <section className="about">
        <div className="whatiskvj">
          <div>
            <h1 data-aos="fade-up">About Kavyanjali</h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              alias delectus quibusdam. Ipsum at corporis repellendus corrupti
              nostrum reprehenderit sint id, animi ratione. Labore minima porro,
              ab rerum accusantium incidunt!
            </p>
          </div>
          <div>
            <img data-aos="fade-up" src={kvjLogo} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
