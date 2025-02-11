import PageTitle from "../components/PageTitle";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import transition from "../utils/transition";
import customFetch from "../hooks/customFetch";
import HeroSection from "../components/HeroSection";

const Sermons = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-backend.onrender.com/api/sermons?populate=*"
  );

  // Extracting the necessary fields from the fetched data
  const sermons = data?.data?.map((sermon) => ({
    image: sermon.attributes.image.data.attributes.url,
    title: sermon.attributes.title,
    link: sermon.attributes.link,
    preacher: sermon.attributes.preacher,
    date: new Date(sermon.attributes.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  }));

  return (
    <>
      <PageTitle
        title="Nyanya Assembly | Sermons"
        description="Listen to inspiring sermons from Nyanya Assembly"
      />
      {/* <Hero text="Sermons" src="images/bible.webp" mainHero={false} /> */}

      <HeroSection
        title={"Sermons"}
        backgroundImage="images/bible.webp"
        section_title="Our Sermons"
        svg_color="#F5AAA1"
        description={`Explore our collection of sermons that offer spiritual guidance, 
            inspiration, and encouragement. Stay connected with our community 
            and deepen your faith through these powerful messages.`}
      />
      <div>
        {loading ? (
          <div className="flex justify-center my-20">
            <span class="loader"></span>
          </div>
        ) : error ? (
          <></>
        ) : (
          <ParallaxScroll items={sermons} />
        )}
      </div>
    </>
  );
};

export default transition(Sermons);
