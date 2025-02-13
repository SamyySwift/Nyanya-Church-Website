import Ministries from "../components/Ministries";
import Transition from "../utils/transition";

const MediaTeam = () => {
  return (
    <>
      <Ministries
        src="/joinbg.mp4"
        team="Media Team"
        images={[
          "images/media5.webp",
          "images/media1.jpg",
          "images/media4.jpg",
          "images/media.webp",
        ]}
      />
    </>
  );
};

export default Transition(MediaTeam);
