import Ministries from "../components/Ministries";

function ClassicalChoir() {
  return (
    <>
      <Ministries
        bgImg="images/choir.jpg"
        bgText={"Classical Choir"}
        team="Classical Choir"
        images={["choir.jpg", "choir2.webp", "choir2.webp", "choir.jpg"]}
        leaderName="Elder Nse Williams"
      />
    </>
  );
}

export default ClassicalChoir;
