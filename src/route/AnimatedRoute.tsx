import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import WebsiteTransitionAnimation from "./TransitionAnim/WebsiteTransitionAnimation";
import CursorContext from "@cursor/CursorContext";
import Home from "@components/pages/Home";
import PageNotFound from "@pages/PageNotFound";
import Box from "@pages/Box";

const AnimatedRoute = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <WebsiteTransitionAnimation key={location.pathname}>
          <CursorContext>
            <Routes location={location}>
              <Route path="/box" element={<Box />} />
              <Route path="/" element={<Home />} />
              <Route path="/*" element={<PageNotFound />} />
            </Routes>
          </CursorContext>
        </WebsiteTransitionAnimation>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoute;
