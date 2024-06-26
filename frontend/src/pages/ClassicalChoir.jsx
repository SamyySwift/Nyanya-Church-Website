import Ministries from "../components/Ministries";

function ClassicalChoir() {
  return (
    <>
      <Ministries
        bgImg="images/choir-bg.JPG"
        bgText="CLASSICAL CHOIR"
        team="Classical Choir"
        images={[
          "images/choir3.jpg",
          "images/choir1.JPG",
          "images/choir2.JPG",
          "images/choir4.JPG",
        ]}
      />
    </>
  );
}

export default ClassicalChoir;
