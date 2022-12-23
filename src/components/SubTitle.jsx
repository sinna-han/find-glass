import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SubTitle(props) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  return (
    <section className='sub_v'>
      <div class='container'>
        <div class='text-center'>
          <h2 data-aos='flip-up'>{props.title}</h2>
          <p data-aos='fade-up'>{props.exp}</p>
        </div>
      </div>
    </section>
  );
}
