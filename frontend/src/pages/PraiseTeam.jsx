import Ministries from "../components/Ministries";

const PraiseTeam = () => {
  return (
    <>
      <Ministries
        src="/join.webm"
        background="video"
        bgText="Praise Team"
        team="Praise & Worship Team"
        images={[
          "images/praise-team-1.webp",
          "images/praise-team-5.webp",
          "images/praise-team-4.webp",
          "images/praise-team-2.webp",
          "images/praise-team-3.webp",
          "images/praise-team-7.webp",
        ]}
      />
    </>
  );
};

export default PraiseTeam;
