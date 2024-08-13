import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import transition from "../utils/transition";
import customFetch from "../hooks/customFetch";

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
        title="Sermons | Nyanya Assembly"
        description="Church sermons"
      />
      <Hero text="Sermons" src="images/bible.webp" mainHero={false} />

      {loading ? (
        <div className="flex justify-center my-20">
          <span class="loader"></span>
        </div>
      ) : error ? (
        <></>
      ) : (
        <ParallaxScroll items={sermons} />
      )}
    </>
  );
};

export default transition(Sermons);
