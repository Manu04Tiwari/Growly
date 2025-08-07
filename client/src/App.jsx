import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/howitworks";
import Features from "./components/features";
import LeadForm from "./components/leadform";
import "./styles/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <Features />
      <LeadForm />
      <ToastContainer />
    </>
  );
}

export default App;
