import Ministries from "../components/Ministries";

const YouthFellowship = () => {
  return (
    <>
      <Ministries
        src="/join.webm"
        background="video"
        bgText="Youth Movement"
        team="Youth Movement"
        images={[
          "images/youth.webp",
          "images/youth3.webp",
          "images/youth4.webp",
          "images/youth1.webp",
        ]}
      />
    </>
  );
};

export default YouthFellowship;
