import Card from "../components/ui/Card";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import transition from "../utils/transition";
import HeroSection from "../components/HeroSection";

const Events = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-backend.onrender.com/api/events?populate=*"
  );

  return (
    <div>
      <PageTitle
        title="Events | Nyanya Assembly"
        description="page containing all church upcoming events"
      />

      <HeroSection backgroundVideo="eventbg.mp4" svg_color="#E5E0D4" />
      <section className="bg-[#E5E0D4] py-[60px]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-5 md:text-5xl font-alfa">
            Upcoming Events
          </h2>
          <p className="font-karla text-neutral-700 font-light  text-xl md:text-2xl text-justify max-w-2xl">
            Discover exciting events that will uplift your spirit and enrich
            your journey. Don't miss out on our latest upcoming experiences!
          </p>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center">
              <span class="loader"></span>
            </div>
          ) : error ? (
            <h1 className="text-center text-5xl font-semibold py-20">
              {error}
            </h1>
          ) : (
            <>
              {data.data.map((event, idx) => {
                return (
                  <Card
                    key={idx}
                    {...event.attributes}
                    btnName="Add To Calender"
                    btnType="event"
                    i={idx}
                  />
                );
              })}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default transition(Events);
