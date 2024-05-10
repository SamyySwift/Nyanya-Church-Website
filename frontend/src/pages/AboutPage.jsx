import React from "react";
import transition from "../utils/transition";
import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import WordAnimation from "../components/WordAnimation";

const AboutPage = () => {
  return (
    <>
      <Hero text="ABOUT US" src="images/group.jpg" mainHero={false} />
      <section>
        <Welcome
          title="Our Pastors"
          text="Apostle and Deaconness I.O Udofia currently serve as Pastors of The Apostoliic Church Nigeria Nyanya Assembly."
          imgSrc="images/pastor2.jpg"
        />
      </section>
      <WordAnimation />
    </>
  );
};

export default transition(AboutPage);
