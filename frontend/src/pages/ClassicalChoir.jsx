import Ministries from "../components/Ministries";

function ClassicalChoir() {
  return (
    <>
      <Ministries
        bgImg="images/choir-bg.JPG"
        bgText={"CLASSICAL CHOIR"}
        team="Classical Choir"
        images={["choir3.jpg", "choir1.JPG", "choir2.JPG", "choir.JPG"]}
        leaderName="Elder Nse Williams"
      />
    </>
  );
}

export default ClassicalChoir;
