import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

function ClassicalChoir() {
  return (
    <>
      <Ministries
        team="Main Choir"
        images={[
          "images/choir3.webp",
          "images/choir5.webp",
          "images/choir1.webp",
          "images/choir2.webp",
          "images/choir4.webp",
        ]}
      />
    </>
  );
}

export default Transition(ClassicalChoir);
