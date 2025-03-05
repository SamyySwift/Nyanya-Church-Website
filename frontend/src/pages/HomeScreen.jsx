import WorshipWithUs from "../components/WorshipWithUs";
import { Welcome } from "../components/Welcome";
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
        title="Home | Nyanya Assembly"
        description="Nyanya Assembly Home Page "
      />
      <HeroSection svg_color="#F7F2E9" backgroundVideo="bg.webm" />
      <div className="bg-[#F7F2E9]">
        <Welcome
          title="Welcome"
          text={
            <>
              The Apostolic Church Nigeria, Nyanya Assembly is a {""}
              <FlipWords words={words} /> church in the beautiful city of Abuja.
              We are a community that loves Jesus and loves people. Whether
              you're new to the area or looking for a place to call home, we'd
              love to welcome you with open arms. Join us for worship and
              experience the warmth and love of our congregation. We can't wait
              to meet you!
            </>
          }
        />
      </div>

      <Explore />
      <WorshipWithUs overlayClassName="opacity-30" />
    </>
  );
}

export default transition(HomeScreen);
