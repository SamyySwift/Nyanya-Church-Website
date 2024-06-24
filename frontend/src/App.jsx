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
import TechTeam from "./pages/TechTeam.jsx";
import ClassicalChoir from "./pages/ClassicalChoir.jsx";
import { HelmetProvider } from "react-helmet-async";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <div className=" backdrop-blur-lg bg-opacity-20 p-8"> */}
      <Navbar />
      {/* </div> */}
      <HelmetProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomeScreen />} />
            <Route path="/events" element={<Events />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/praise-team" element={<PraiseTeam />} />
            <Route path="/media-team" element={<MediaTeam />} />
            <Route path="/tech-team" element={<TechTeam />} />
            <Route path="/plan-your-visit" element={<PlanVisit />} />
            <Route path="/join-a-group" element={<JoinAGroup />} />
            <Route path="/youth-fellowship" element={<YouthFellowship />} />
            <Route path="/classical-choir" element={<ClassicalChoir />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
