import Card from "../components/ui/Card";
import Hero from "../components/Hero";
import customFetch from "../hooks/customFetch";
import events from "./data";
import PageTitle from "../components/PageTitle";

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
      <Hero text="UPCOMING EVENTS" src="/images/help.jpg" mainHero={false} />

      <section>
        <div className="text-center pt-20">
          <h1 className=" font-vibes text-5xl md:text-8xl">
            Discover Upcoming Events
          </h1>
          <p className="font-grotesque font-extralight text-xl md:text-2xl max-w-3xl mx-auto mt-5 px-5 md:px-0">
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
              Database is down at the moment...
            </h1>
          ) : (
            <>
              {data.data.map((event, idx) => {
                return <Card key={idx} {...event.attributes} i={idx} />;
              })}
            </>
          )}
        </div> */}
        {events.map((event, idx) => {
          return <Card key={idx} {...event} i={idx} />;
        })}
      </section>
    </div>
  );
};

export default Events;
