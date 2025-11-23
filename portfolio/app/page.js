'use client'
import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Work />
    </>
  );
}
