import Hero from "../components/Hero";
import ChurchServices from "../components/ChurchServices";
import WorshipTime from "../components/WorshipTime";
// import ExtraSection from "../components/ExtraSection";
import { Welcome } from "../components/Welcome";
import "../App.css";
import Explore from "../components/Explore";
import transition from "../utils/transition";
import WordAnimation from "../components/WordAnimation";

function HomeScreen() {
  return (
    <>
      <section className="overflow-hidden">
        <Hero
          text="Welcome to Nyanya Assembly"
          background="video"
          src="/bg2.mp4"
          mainHero={true}
        />
      </section>

      <Welcome
        title="Welcome Home"
        text="Nyanya Assembly is a vibrant and friendly church in the beautiful city
            of Abuja. We love Jesus and we love people. We'd love to see you
            here soon!"
        imgSrc="welcome.webp"
      />

      <section className="overflow-hidden">
        <Explore />
      </section>
      <WordAnimation />
      <section className=" overflow-hidden">
        <ChurchServices />
      </section>
      {/* <section className=" overflow-hidden">
        <ExtraSection />
      </section> */}
      <section className=" overflow-hidden">
        <WorshipTime />
      </section>
    </>
  );
}

export default transition(HomeScreen);
