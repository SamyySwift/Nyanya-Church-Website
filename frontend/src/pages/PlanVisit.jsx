import React from "react";
import Hero from "../components/Hero";
import { Welcome } from "../components/Welcome";
import InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import transition from "../utils/transition";
import PageTitle from "../components/PageTitle";

const PlanVisit = () => {
  return (
    <>
      <PageTitle
        title="Plan Your Visit"
        description="Page contains info on how to locate church"
      />
      <Hero text="PLAN YOUR VISIT" background="video" src="/bg1.mp4" />

      <section style={{ backgroundColor: "#EBE3D5" }}>
        <Welcome
          title="What's it like?"
          text="No matter who you are or where you come from, our aim is for you
          to feel welcomed and comfortable as soon as you arrive. "
          imgSrc="welcome2.jpg"
        />
      </section>
      <section>
        <div
          className=" h-screen  flex flex-col md:flex-row justify-center items-center pt-20 gap-10 overflow-hidden"
          style={{ backgroundColor: "#D6DAC8" }}
        >
          {/* <iframe
            className="md:w-[600px] md:h-[500px]  w-screen h-[600px] px-5"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=720&amp;height=500&amp;hl=en&amp;q=Dape%201,%20After%20Julius%20Berger%20Clinic%20Clinic,%20Life%20Camp+(Nyanya%20Area)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe> */}

          <iframe
            className="md:w-[600px] md:h-[500px]  w-screen h-[600px] px-5"
            src="https://maps.google.com/maps?width=720&amp;height=500&amp;hl=en&amp;q=NO.%202,%20Avenue%20Nyanya%20Karu%20Road%20Opposite%20A.A.%20Rano%20Filling%20Station,%20Nyanya,%20Abuja,%20FCT+(Nyanya%20Assembly)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>

          <div className="md:w-[500px] mx-5">
            <span className="font-semibold text-3xl md:text-5xl font-grotesque">
              Detailed directions
            </span>
            <p className="mt-5 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, ea
              earum ut, numquam nesciunt alias laudantium dolorum magni corrupti
              eos rerum nisi fugit impedit ducimus, nemo magnam tempora ex
              nihil.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quos dolores? Earum nihil et eveniet in sapiente nemo
              itaque. Labore alias dolorem adipisci accusamus, obcaecati esse
              veritatis incidunt officia ad?
            </p>
          </div>
        </div>
      </section>
      <section className="h-[150px] md:h-[500px] flex items-center bg-neutral-900 text-white">
        <InfiniteMovingCards
          direction="left"
          speed="slow"
          type="text"
          textContent="EMBRACE THE MESSIAH - EMBRACING HUMANITY - FOCUSED ON JESUS - LIFE RENEWING - OUTWARD ENGAGED"
        />
      </section>
    </>
  );
};

export default transition(PlanVisit);
