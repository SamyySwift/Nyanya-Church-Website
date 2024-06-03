import Ministries from "../components/Ministries";

const MediaTeam = () => {
  return (
    <>
      <Ministries
        bgImg="images/media-bg.JPG"
        bgText={"Media Team"}
        team="Media Team"
        title="Radiance: Illuminating the World Through Media"
        images={["media3.jpg", "media1.jpg", "media4.jpg", "media3.jpg"]}
      />
    </>
  );
};

export default MediaTeam;
