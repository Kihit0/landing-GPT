import React from "react";
import "./App.css";
import {
  Blog,
  Features,
  Footer,
  Possibility,
  WhatGPT3,
  Header,
} from "./components/containers/index";
import { Brand, CTA, Navbar } from "./components/ux/index";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
