import React from "react";
import Ministries from "../components/Ministries";
import praiseTeam from "../assets/images/praise.jpg";

const msgBody = `
We firmly believe that the musical aspect of our worship and
praise plays a vital role in our journey as Christians. This
divine gift bestowed upon us by God not only enriches our faith
but also uplifts our spirits, fosters unity among the
congregation, and fortifies our doctrinal understanding.
Recognizing the immense power inherent in the words we utter or
sing, our leadership exercises great diligence in selecting songs
that resonate closely with our perception of our Almighty God and
His gospel message to us.
`;

const msgTitle = `
Exalt the lord our god, and worship at his holy mountain; for the
lord our god is holy!

`;

const PraiseTeam = () => {
  return (
    <>
      <Ministries
        bgImg={praiseTeam}
        bgText={"Praise Team"}
        msgBody={msgBody}
        msgTitle={msgTitle}
        biblePortion="Psalm 99:9"
        team="Praise & Worship Team"
        title="Praise & Worship moves God"
        images={[
          "keyboard.jpg",
          "keyboard.jpg",
          "keyboard.jpg",
          "keyboard.jpg",
        ]}
      />
    </>
  );
};

export default PraiseTeam;
