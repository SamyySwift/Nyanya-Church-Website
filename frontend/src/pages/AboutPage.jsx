import transition from "../utils/transition";
import HeroSection from "../components/HeroSection";
import { Welcome } from "../components/Welcome";
import PageTitle from "../components/PageTitle";
import ChurchServices from "../components/ChurchServices";

const AboutPage = () => {
  const images = ["images/pastor.webp"];
  return (
    <>
      <PageTitle
        title="About Us | Nyanya Assembly"
        description="About us page"
      />
      <HeroSection
        svg_color="#E5E0D4"
        backgroundVideo="bg.mp4"
        title="About Us"
      />
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
        <h3 className="container mx-auto px-5 mb-10 text-white font-alfa text-3xl md:text-4xl">
          Our Church Services
        </h3>
        <ChurchServices />
      </section>

      {/* Motto */}
      <div
        className="relative h-[600px] w-full flex items-center justify-center font-karla"
        style={{
          backgroundImage: `url(${"images/bible.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-alfa">OUR 2025 MOTTO</h1>
          <p className="text-lg md:text-2xl mt-4 md:max-w-xl p-4 font-karla">
            Our redeemer is strong, the Lord of hosts is His name, He will
            surely plead our cause!{" "}
            <span className="font-bold underline underline-offset-4">
              Jeremiah 50:34.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default transition(AboutPage);
