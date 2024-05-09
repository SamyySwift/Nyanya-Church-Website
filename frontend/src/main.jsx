import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" index={true} element={<HomeScreen />} />
//       <Route path="/events" element={<Events />} />
//       <Route path="/praise-team" element={<PraiseTeam />} />
//       <Route path="/tech-team" element={<TechTeam />} />
//       <Route path="/plan-your-visit" element={<PlanVisit />} />
//       <Route path="/join-a-group" element={<JoinAGroup />} />
//     </Route>
//   )
// );
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ParallaxProvider>
      {/* <RouterProvider router={router} />
       */}
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </ParallaxProvider>
  </React.StrictMode>
);
