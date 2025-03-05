import Footer from "./components/Footer";
import Navbar from "./components/NavBar.jsx";
import { useLocation, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import Events from "./pages/Events.jsx";
import PraiseTeam from "./pages/PraiseTeam.jsx";
import MediaTeam from "./pages/MediaTeam.jsx";
import PlanVisit from "./pages/PlanVisit.jsx";
import JoinAGroup from "./pages/JoinAGroup.jsx";
import YouthFellowship from "./pages/YouthFellowship.jsx";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/AboutPage.jsx";
import ClassicalChoir from "./pages/ClassicalChoir.jsx";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Lenis from "lenis";
import ScrollToTop from "./utils/scroll-to-top.js";
import Sermons from "./pages/Sermons.jsx";
import Contact from "./pages/Contact.jsx";
import GivingPage from "./pages/Giving.jsx";
import pingServer from "./utils/ping.js";
import DailyRefresh from "./pages/DailyRefresh.jsx";
import New from "./pages/New.jsx";
import ReadMore from "./pages/ReadMore.jsx";
import Ushering from "./pages/UseringTeam.jsx";
import Home from "./pages/Home.jsx";

function App() {
  const location = useLocation();
  pingServer();

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="">
      <ScrollToTop />
      <Navbar />

      <HelmetProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/praise-team" element={<PraiseTeam />} />
            <Route path="/media-team" element={<MediaTeam />} />
            <Route path="/plan-your-visit" element={<PlanVisit />} />
            <Route path="/join-a-group" element={<JoinAGroup />} />
            <Route path="/youth-fellowship" element={<YouthFellowship />} />
            <Route path="/classical-choir" element={<ClassicalChoir />} />
            <Route path="/ushering-team" element={<Ushering />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/giving" element={<GivingPage />} />
            <Route path="/daily-word" element={<DailyRefresh />} />
            <Route path="/welcome" element={<New />} />
            <Route path="/read-more" element={<ReadMore />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
