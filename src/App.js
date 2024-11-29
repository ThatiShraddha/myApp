import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

// import BlogSection from "./components/BlogSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* Uncomment this to include the BlogSection */}
      {/* <BlogSection /> */}
      <Footer />
    </div>
  );
}

export default App;
