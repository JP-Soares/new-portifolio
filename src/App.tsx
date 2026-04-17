import React from "react";
import MenuBar from "./components/menu";
import Header from "./sections/header";
import About from "./sections/about";
import TechStack from "./sections/techstack";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.8, // controla a suavidade
      smoothWheel: true,
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // limpeza importante
    };
  }, []);

  return (
    <div>
      <MenuBar></MenuBar>
      <Header></Header>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
