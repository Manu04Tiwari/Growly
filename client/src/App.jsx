import React from "react";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import LeadForm from "./components/LeadForm";
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
