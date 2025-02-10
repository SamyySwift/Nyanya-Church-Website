import Hero from "../components/Hero";
import WorshipWithUs from "../components/WorshipWithUs";
import { Welcome } from "../components/Welcome";
import "../App.css";
import Explore from "../components/Explore";
import transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";
import PageTitle from "../components/PageTitle";

function HomeScreen() {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];

  return (
    <>
      <PageTitle
        title="Nyanya Assembly"
        description="Nyanya assembly | Homepage"
      />

      <Hero text="" background="video" src="/bg.webm" mainHero={true} />

      <Welcome
        title="Welcome"
        text={
          <>
            The Apostolic Church Nigeria, Nyanya Assembly is a {""}
            <FlipWords words={words} /> church in the beautiful city of Abuja.
            We love Jesus and we love people. We'd love to see you here soon!
          </>
        }
      />
      <Explore />
      <WorshipWithUs />
    </>
  );
}

export default transition(HomeScreen);
