import React from "react";
import Ministries from "../components/Ministries";

const msgBody = `
The importance of remembering your creator in the days of your youth, as highlighted in Ecclesiastes 12:1,
 lies in establishing a foundational belief system that guides your decisions and actions throughout life, 
 forming habits of prayer and kindness, preparing for adversity by cultivating resilience and strength, 
 fostering a deeper appreciation for life's blessings, and potentially avoiding future regrets. By embracing spirituality early on, you can lead lives of greater purpose, fulfillment, and spiritual well-being, setting the stage for a meaningful journey enriched by faith and connection with the divine.
`;

const msgTitle = `
Remember now your Creator in the days of your youth, Before the difficult days come, And the years draw near when you say, “I have no pleasure in them. 

`;

const biblePortion = "Ecclessiates 12:1";
const YouthFellowship = () => {
  return (
    <>
      <Ministries
        bgImg="images/youth.jpg"
        bgText={"YOUTH FELLOWSHIP"}
        msgBody={msgBody}
        msgTitle={msgTitle}
        biblePortion={biblePortion}
        team="Youth Fellowship"
        title="Magnify God In Thy Youth"
        leaderName="Emmanuel Nirvana"
        images={["youth.jpg", "media1.jpg", "media4.jpg", "media3.jpg"]}
      />
    </>
  );
};

export default YouthFellowship;
