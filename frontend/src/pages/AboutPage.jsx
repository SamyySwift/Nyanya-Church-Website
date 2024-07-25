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
      <Hero text="About Us" src="images/about-bg.webp" mainHero={false} />
      <section>
        <Welcome
          title="Our Pastors"
          text="Apostle and Deaconness I.O Udofia currently serve as Pastors of The Apostoliic Church Nigeria Nyanya Assembly. Apostle I.O. Udofia is a man with a great 
          God who by God's grace has pastored and shepherd over 5 assemblies. "
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
          <h1 className="text-4xl md:text-6xl font-bold">OUR MOTTO 2024</h1>
          <p className="text-base md:text-xl mt-4 md:max-w-lg p-4">
            Our redeemer is strong, the Lord of hosts is His name, He will
            surely plead our cause!{" "}
            <span className="font-semibold">Jeremiah 50:34.</span>
          </p>
        </div>
      </div>
      {/* 
      <section className="overflow-hidden">
        <ChurchServices />
      </section> */}
    </>
  );
};

export default transition(AboutPage);
