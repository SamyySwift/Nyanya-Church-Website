import React from "react";
import transition from "../utils/transition";
import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import WordAnimation from "../components/WordAnimation";
import PageTitle from "../components/PageTitle";
import ChurchServices from "../components/ChurchServices";

const AboutPage = () => {
  return (
    <>
      <PageTitle title="About Us" description="About us page" />
      <Hero text="ABOUT US" src="images/about-bg.JPG" mainHero={false} />
      <section>
        <Welcome
          title="Our Pastors"
          text="Apostle and Deaconness I.O Udofia currently serve as Pastors of The Apostoliic Church Nigeria Nyanya Assembly."
          imgSrc="pastor2.jpg"
        />
      </section>
      <WordAnimation />

      <section className=" overflow-hidden">
        <ChurchServices />
      </section>
    </>
  );
};

export default transition(AboutPage);
