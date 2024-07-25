import Hero from "../components/Hero";
import PageTitle from "../components/PageTitle";
import { ParallaxScroll } from "../components/ui/parallax-scroll";
import transition from "../utils/transition";

const Sermons = () => {
  return (
    <>
      <PageTitle
        title="Sermons | Nyanya Assembly"
        description="church sermons"
      />
      <Hero
        text="Sermons"
        // background="video"
        src="images/bible.webp"
        mainHero={false}
      />

      <ParallaxScroll items={messages} />
    </>
  );
};

export default transition(Sermons);

const messages = [
  {
    title: "Your Season of Release and Freedom",
    bgImg: "images/about-bg.webp",
    link: "",
    preacher: "Pastor Imoh Udofia",
    date: "July 27, 2024",
  },
  {
    title: "Embracing the Light of Hope",
    bgImg: `https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Reverend Angela Smith",
    date: "August 3, 2024",
  },
  {
    title: "Finding Peace in Turmoil",
    bgImg:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    link: "",
    preacher: "Bishop Michael Johnson",
    date: "August 10, 2024",
  },
  {
    title: "Faith Through the Storm",
    bgImg:
      "https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    link: "",
    preacher: "Pastor Atta Essien",
    date: "August 31, 2024",
  },
  {
    title: "Journey to Spiritual Renewal",
    bgImg: `https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80`,
    link: "",
    preacher: "Pastor Daniel Brown",
    date: "August 17, 2024",
  },
  {
    title: "Restoration of the Heart",
    bgImg: `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Sister Emily Clark",
    date: "August 24, 2024",
  },
  {
    title: "A Call to Worship",
    bgImg: `https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80`,
    link: "",
    preacher: "Pastor Samuel Green",
    date: "August 31, 2024",
  },
  {
    title: "Courage to Overcome",
    bgImg: `images/pastor.webp`,
    link: "",
    preacher: "Pastor Samuel Green",
    date: "August 31, 2024",
  },
  {
    title: "Grace in Abundance",
    bgImg: `https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Pastor David Green",
    date: "August 31, 2024",
  },
  {
    title: "Walking in Divine Favor",
    bgImg: `https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Pastor Samuel Green",
    date: "August 31, 2024",
  },
  {
    title: "Embracing the Light of Hope",
    bgImg: `https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Reverend Angela Smith",
    date: "August 3, 2024",
  },

  {
    title: "A Call to Worship",
    bgImg: `https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80`,
    link: "",
    preacher: "Pastor Samuel Green",
    date: "August 31, 2024",
  },
  {
    title: "Grace in Abundance",
    bgImg: `https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Pastor David Green",
    date: "August 31, 2024",
  },
  {
    title: "Journey to Spiritual Renewal",
    bgImg: `https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80`,
    link: "",
    preacher: "Pastor Daniel Brown",
    date: "August 17, 2024",
  },
  {
    title: "Restoration of the Heart",
    bgImg: `https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80`,
    link: "",
    preacher: "Sister Emily Clark",
    date: "August 24, 2024",
  },
];
