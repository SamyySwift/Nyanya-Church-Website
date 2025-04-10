import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

function Ushering() {
  return (
    <>
      <Ministries team="Ushering Team" images={["images/ushering.webp"]} />
    </>
  );
}

export default Transition(Ushering);
