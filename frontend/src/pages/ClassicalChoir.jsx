import Ministries from "../components/Ministries";

function ClassicalChoir() {
  return (
    <>
      <Ministries
        bgImg="images/choir-bg.webp"
        bgText="Classical Choir"
        team="Classical Choir"
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

export default ClassicalChoir;
