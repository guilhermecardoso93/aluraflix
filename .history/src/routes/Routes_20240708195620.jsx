import { BrowserRouter, Route, Routes } from "react-router-dom";
import { VideoProvider } from "../Contexts/VideoContext";

import { Home } from '../pages/Home'

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "./AppRoutes.css";

export function AppRoutes() {
  return (
    <VideoProvider>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <div className="content">
            <Routes>
              <Route element={<Home />}></Route>
              <Route path="newVideo" element={<NewVideo />}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </VideoProvider>
  );
}
