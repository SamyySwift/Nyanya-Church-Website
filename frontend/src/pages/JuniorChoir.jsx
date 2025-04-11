import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

function JuniorChoir() {
  return (
    <>
      <Ministries
        team="Junior Choir"
        images={[
          "images/choir6.jpeg",
          "images/choir5.webp",
          "images/choir7.jpeg",
          "images/choir8.jpeg",
        ]}
      />
    </>
  );
}

export default Transition(JuniorChoir);
