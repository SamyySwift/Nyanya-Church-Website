import transition from "../utils/transition";
import Hero from "../components/Hero";
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
      <Hero text="About Us" background="video" src="/bg.webm" />
      <section>
        <Welcome
          title="Our Pastors"
          text="Apostle I.O. Udofia and Deaconess I.O. Udofia are currently serving as the dedicated pastors of The Apostolic Church Nigeria, 
          Nyanya Assembly. By the grace of God, Apostle I.O. Udofia is a servant leader with a heart for ministry, having faithfully pastored 
          and shepherded over four assemblies, demonstrating unwavering commitment to the growth of the church and the spiritual well-being of its members."
          imgSrc={images}
        />
      </section>

      <div
        className="relative h-[600px] w-full flex items-center justify-center font-grotesque"
        style={{
          backgroundImage: `url(${"images/bible.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            OUR MOTTO 2024
          </h1>
          <p className="text-lg md:text-2xl mt-4 md:max-w-lg p-4">
            Our redeemer is strong, the Lord of hosts is His name, He will
            surely plead our cause!{" "}
            <span className="font-bold underline underline-offset-4">
              Jeremiah 50:34.
            </span>
          </p>
        </div>
      </div>

      {/* <section className="overflow-hidden">
        <ChurchServices />
      </section> */}
    </>
  );
};

export default transition(AboutPage);
