import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoProvider } from "../Contexts/VideoContext";

import { Home } from "../pages/Home";
import { NewVideo } from "../pages/NewVideo";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { PageNotFound } from "../pages/PageNotFound";

import "./AppRoutes.css";

export function AppRoutes() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route path="*" element={<PageNotFound />} />
              <Route path="/" element={<Home />} />
              <Route path="/new-video" element={<NewVideo />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}
