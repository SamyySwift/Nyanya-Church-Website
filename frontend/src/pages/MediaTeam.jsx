import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

const MediaTeam = () => {
  return (
    <>
      <Ministries
        team="Media Team"
        images={[
          "images/media1.webp",
          "images/media3.webp",
          "images/media4.webp",
          "images/media2.webp",
        ]}
      />
    </>
  );
};

export default Transition(MediaTeam);
