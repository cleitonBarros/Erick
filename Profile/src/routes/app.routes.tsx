import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { Home } from "../pages/Home";
import { Videos } from "../pages/videos";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
