import Card from "../components/ui/Card";
import Hero from "../components/Hero";
// import customFetch from "../hooks/customFetch";
import events from "./data";
import PageTitle from "../components/PageTitle";
import transition from "../utils/transition";

const Events = () => {
  // const { loading, error, data } = customFetch(
  //   "http://localhost:1337/api/events?populate=*"
  // );

  return (
    <div>
      <PageTitle
        title="Upcoming Events"
        description="page containing all church upcoming events"
      />

      <Hero text="Upcoming Events" background="video" src="/bg3.webm" />

      <section>
        <div className="text-center pt-20">
          <h1 className=" font-vibes text-5xl md:text-8xl">
            Discover Upcoming Events
          </h1>
          <p className="font-grotesque font-extralight text-center text-xl md:text-2xl max-w-3xl mx-auto mt-5 px-5 md:px-0">
            Discover exciting events that will uplift your spirit and enrich
            your journey. Don't miss out on our latest upcoming experiences!
          </p>
        </div>

        {/* <div>
          {loading ? (
            <>
              <h1 className="text-center text-5xl font-semibold py-20">
                Retriving all events...
              </h1>
            </>
          ) : error ? (
            <h1 className="text-center text-5xl font-semibold py-20">
              Something went wrong, try again...
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
        </div> */}
        {events.map((event, idx) => {
          return (
            <Card
              key={idx}
              {...event}
              btnName="Add To Calender"
              btnType="event"
              i={idx}
            />
          );
        })}
      </section>
    </div>
  );
};

export default transition(Events);
