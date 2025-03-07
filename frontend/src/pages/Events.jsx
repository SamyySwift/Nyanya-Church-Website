import Card from "../components/ui/Card";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import HeroSection from "../components/HeroSection";

const Events = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/events?populate=*"
  );

  return (
    <div>
      <PageTitle
        title="Events | Nyanya Assembly"
        description="page containing all church upcoming events"
      />

      <HeroSection backgroundVideo="bg.mp4" svg_color="#E5E0D4" />
      <section className="bg-[#E5E0D4] py-[90px]">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl mb-10 md:text-5xl">
            <span className="font-alfa">Upcoming</span>{" "}
            <span className="font-thin italic font-saol">Events</span>
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
            <p className="flex justify-center  text-center text-xl  py-[150px] font-karla">
              No Events at the momemt. Try again later
            </p>
          ) : (
            <div>
              {data?.data?.length > 0 ? (
                data.data.map((event, idx) => (
                  <Card
                    key={idx}
                    title={event.title}
                    color={event.color}
                    description={event.description}
                    time={event.time}
                    date={event.date}
                    eventImage={event.eventImage.url}
                    btnName="Add To Calender"
                    btnType="event"
                    i={idx}
                  />
                ))
              ) : (
                <p className="flex justify-center  text-center text-xl  py-[150px] font-karla">
                  No Events at the moment. Try again later
                </p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Transition(Events);
