import Card from "../components/ui/Card";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import Transition from "../utils/transition";
import HeroSection from "../components/HeroSection";

const Events = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-website-backend.onrender.com/api/events?populate=*"
  );
  const sortedEvents = data?.data
    ?.slice() // clone the array to avoid mutating original
    ?.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  return (
    <div>
      <PageTitle
        title="Events | Nyanya Assembly"
        description="page containing all church upcoming events"
      />

      <HeroSection
        backgroundVideo="eventbg.mp4"
        svg_color="#FFFFFF"
        // title="Upcoming Events"
      />
      <section className=" py-[50px]">
        <div className="flex justify-center px-5">
          <p className="font-karla  text-neutral-700 font-light  text-xl md:text-2xl max-w-3xl">
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
            <p className="flex justify-center  text-center text-lg lg:text-xl  py-[150px] font-karla">
              No Events at the momemt. Try again later
            </p>
          ) : (
            <div>
              {data?.data?.length > 0 ? (
                sortedEvents.map((event, idx) => (
                  <Card
                    key={idx}
                    title={event.title}
                    color={event.color}
                    description={event.description}
                    duration={event.duration}
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
