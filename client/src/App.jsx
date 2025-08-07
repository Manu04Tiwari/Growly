import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import LeadForm from "./components/LeadForm";
import "./styles/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeaturesSection from "./components/FeaturesSection";

function App() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
      <LeadForm />
      <ToastContainer />
    </>
  );
}

export default App;
