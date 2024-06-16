import Hero from "../components/Hero";
import WorshipWithUs from "../components/WorshipWithUs";

// import ExtraSection from "../components/ExtraSection";
import { Welcome } from "../components/Welcome";
import "../App.css";
import Explore from "../components/Explore";
import transition from "../utils/transition";
// import WordAnimation from "../components/WordAnimation";
import { FlipWords } from "../components/ui/flip-words";
import PageTitle from "../components/PageTitle";

function HomeScreen() {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];
  return (
    <div className="overflow-hidden">
      <PageTitle
        title="Nyanya Assembly"
        description="Nyanya assembly homepage"
      />
      <section className="overflow-hidden">
        <Hero
          text="Welcome to Nyanya Assembly"
          background="video"
          src="/bg1.mp4"
          mainHero={true}
        />
      </section>
      <Welcome
        title="Welcome To Nyanya"
        text={
          <>
            Nyanya Assembly is a {""}
            <FlipWords words={words} /> church in the beautiful city of Abuja.
            We love Jesus and we love people. We'd love to see you here soon!
          </>
        }
        imgSrc="welcome-bg.JPG"
      />
      <section className="overflow-hidden">
        <Explore />
      </section>
      {/* <WordAnimation /> */}
      <section className=" overflow-hidden">
        <WorshipWithUs />
      </section>
    </div>
  );
}

export default transition(HomeScreen);
