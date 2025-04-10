import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

function Witness() {
  return (
    <>
      <Ministries
        team="Witness Movement"
        images={[
          "images/witness-1.jpeg",
          "images/witness-2.jpeg",
          "images/witness-3.jpeg",
        ]}
      />
    </>
  );
}

export default Transition(Witness);
