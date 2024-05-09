// import { Outlet } from "react-router";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { useLocation, Route, Routes } from "react-router-dom";
import HomeScreen from "./pages/HomeScreen.jsx";
import Events from "./pages/Events.jsx";
import PraiseTeam from "./pages/PraiseTeam.jsx";
import TechTeam from "./pages/TechTeam.jsx";
import PlanVisit from "./pages/PlanVisit.jsx";
import JoinAGroup from "./pages/JoinAGroup.jsx";
import YouthFellowship from "./pages/YouthFellowship.jsx";
import { AnimatePresence } from "framer-motion";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<HomeScreen />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/praise-team" element={<PraiseTeam />} />
          <Route path="/tech-team" element={<TechTeam />} />
          <Route path="/plan-your-visit" element={<PlanVisit />} />
          <Route path="/join-a-group" element={<JoinAGroup />} />
          <Route path="/youth-fellowship" element={<YouthFellowship />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
