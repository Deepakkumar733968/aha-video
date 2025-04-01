import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import NavBar from "./layouts/NavBar/NavBar.tsx";
import Footer from "./layouts/Footer/Footer.tsx";
import { ChatWithExpert } from "./components/ChatWithExpert/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NavBar />
    <App />
    <Footer />
    <ChatWithExpert />
  </StrictMode>
);
