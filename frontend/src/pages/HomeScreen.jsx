import WorshipWithUs from "../components/WorshipWithUs";
import { Welcome } from "../components/Welcome";
import "../App.css";
import Explore from "../components/Explore";
import transition from "../utils/transition";
import { FlipWords } from "../components/ui/flip-words";
import PageTitle from "../components/PageTitle";
import HeroSection from "../components/HeroSection";

function HomeScreen() {
  const words = ["vibrant", "friendly", "beautiful", "modern", "lovable"];

  return (
    <>
      <PageTitle
        title="Nyanya Assembly"
        description="Nyanya assembly | Homepage"
      />

      {/* <Hero text="" background="video" src="/bg.webm" mainHero={true} /> */}
      <HeroSection svg_color="#F5AAA1" backgroundImage="/images/people.jpg" />
      <div className="bg-[#F5AAA1] py-20">
        <Welcome
          title="Welcome"
          text={
            <>
              The Apostolic Church Nigeria, Nyanya Assembly is a {""}
              <FlipWords words={words} /> church in the beautiful city of Abuja.
              We are a modern community that loves Jesus and loves people.
              Whether you're new to the area or looking for a place to call
              home, we'd love to welcome you with open arms. Join us for worship
              and experience the warmth and love of our congregation. We can't
              wait to meet you!
            </>
          }
        />
      </div>

      <Explore />
      <WorshipWithUs />
    </>
  );
}

export default transition(HomeScreen);
