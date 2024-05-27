import Ministries from "../components/Ministries";

const msgBody = `


At Nyanya, we understand the pivotal role technology plays in enhancing worship experiences and fostering community engagement. Our Tech Team is dedicated to leveraging cutting-edge tools and innovations to create seamless and impactful multimedia experiences that resonate with our congregation.

Here, you'll dive into the heart of our Tech Team – a collective of tech enthusiasts driven by a passion for creativity and excellence. 
Our team handles a wide range of tasks, from setting up worship slides and PowerPoints to managing sound and lighting, and arranging cameras for live streaming our services to platforms like Facebook, YouTube, and our website.

Join us on a journey of exploration and discovery as we showcase our commitment to pushing the boundaries of technology in service of our mission. Whether you're a seasoned tech professional or a curious newcomer, there's a place for you to contribute and grow within our team.

Experience the thrill of harnessing technology to spread love, hope, and faith in our community. Together, let's embark on a transformative journey powered by tech innovation.
`;

const msgTitle = `
each of you should use whatever gift you have received to serve others, as faithful stewards of god’s grace in its various forms. 

`;

const biblePortion = "1 Peter 4:10";
const MediaTeam = () => {
  return (
    <>
      <Ministries
        bgImg="images/media1.jpg"
        bgText={"Media Team"}
        msgBody={msgBody}
        msgTitle={msgTitle}
        biblePortion={biblePortion}
        team="Media Team"
        title="Radiance: Illuminating the World Through Media"
        images={["media3.jpg", "media1.jpg", "media4.jpg", "media3.jpg"]}
      />
    </>
  );
};

export default MediaTeam;
