import Transition from "../utils/transition";
import HeroSection from "../components/HeroSection";
import { Welcome } from "../components/Welcome";
import PageTitle from "../components/PageTitle";
import ChurchServices from "../components/ChurchServices";
import GrainyBackground from "../components/GrainyBackground";

const AboutPage = () => {
  const images = ["images/pastor.webp"];
  return (
    <>
      <PageTitle
        title="About Us | Nyanya Assembly"
        description="About us page"
      />
      <HeroSection svg_color="#E5E0D4" backgroundVideo="bg.mp4" />
      <section className="bg-[#E5E0D4]">
        <Welcome
          title="Our Pastors"
          text="Apostle I.O. Udofia and Deaconess I.O. Udofia are currently serving as the dedicated pastors of The Apostolic Church Nigeria, 
          Nyanya Assembly. By the grace of God, Apostle I.O. Udofia is a servant leader with a heart for ministry, having faithfully pastored 
          and shepherded over four assemblies, demonstrating unwavering commitment to the growth of the church and the spiritual well-being of its members."
          imgSrc={images}
        />
      </section>

      {/* Church Services */}
      <section className="bg-black py-[10rem]">
        <h3 className="container mx-auto px-5 mb-10 text-white font-anton text-3xl md:text-4xl">
          Our Church Services
        </h3>
        <ChurchServices />
      </section>

      <GrainyBackground
        bgImg="images/noise.webp"
        content={
          <div className="relative z-10 py-[100px] md:py-[300px] flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl md:text-6xl font-anton">OUR 2025 MOTTO</h1>
            <p className="text-2xl md:text-4xl mt-4 md:max-w-3xl p-4 font-karla">
              Help us, oh God of our salvation, for the glory of thy name: and
              deliver us. <br />{" "}
              <span className="font-bold underline underline-offset-4">
                Psalm 79:9
              </span>
            </p>
          </div>
        }
      />
    </>
  );
};

export default Transition(AboutPage);
