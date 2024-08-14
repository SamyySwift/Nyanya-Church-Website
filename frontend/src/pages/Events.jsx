import Card from "../components/ui/Card";
import Hero from "../components/Hero";
import customFetch from "../hooks/customFetch";
import PageTitle from "../components/PageTitle";
import transition from "../utils/transition";

const Events = () => {
  const { loading, error, data } = customFetch(
    "https://nyanya-church-backend.onrender.com/api/events?populate=*"
  );

  return (
    <div>
      <PageTitle
        title="Nyanya Assembly | Upcoming Events"
        description="page containing all church upcoming events"
      />

      <Hero text="Upcoming Events" background="video" src="/bg.webm" />

      <section>
        <div className="text-center py-10">
          <p className="font-karla text-justify text-xl md:text-2xl max-w-lg mx-auto px-5 md:px-0">
            Discover exciting events that will uplift your spirit and enrich
            your journey. Don't miss out on our latest upcoming experiences!
          </p>
        </div>

        <div>
          {loading ? (
            <div className="flex justify-center my-20">
              <span class="loader"></span>
            </div>
          ) : error ? (
            <h1 className="text-center text-5xl font-semibold py-20"></h1>
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
