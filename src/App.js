import React from "react";

import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { Navbar, SocialMedia } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <SocialMedia />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
