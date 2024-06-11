import React from "react";
import Ministries from "../components/Ministries";

const PraiseTeam = () => {
  return (
    <>
      <Ministries
        bgImg="images/praise-team-1.jpg"
        bgText="Praise Team"
        team="Praise & Worship Team"
        title="Praise & Worship moves God"
        images={[
          "praise-team-6.JPG",
          "praise-team-3.jpg",
          "praise-team-5.JPG",
          "praise-team-2.JPG",
        ]}
      />
    </>
  );
};

export default PraiseTeam;
