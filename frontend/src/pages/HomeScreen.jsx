import Hero from "../components/Hero";
import WorshipWithUs from "../components/WorshipWithUs";
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
    <div className="overflow-hidden relative">
      <PageTitle
        title="Nyanya Assembly"
        description="Nyanya assembly homepage"
      />

      <Hero
        text="NYANYA ASSEMBLY"
        background="video"
        src="/bg.webm"
        mainHero={true}
      />

      <Welcome
        title="Welcome To Church"
        text={
          <>
            Nyanya Assembly is a {""}
            <FlipWords words={words} /> church in the beautiful city of Abuja.
            We love Jesus and we love people. We'd love to see you here soon!
          </>
        }
      />
      {/* EXPLORE SECTION */}
      <section className="overflow-hidden">
        <Explore />
      </section>
      {/* WORSHIP WITH US SECTION */}
      <section className=" overflow-hidden">
        <WorshipWithUs />
      </section>
    </div>
  );
}

export default transition(HomeScreen);
