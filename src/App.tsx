import React from "react";
import MenuBar from "./components/menu";
import Header from "./sections/header";
import About from "./sections/about";
import TechStack from "./sections/techstack";
import Projects from "./sections/projects";
import Contact from "./sections/contact";

function App() {
  return (
    <section>
      <MenuBar></MenuBar>
      <Header></Header>
      <About></About>
      <TechStack></TechStack>
      <Projects></Projects>
      <Contact></Contact>
    </section>
  );
}

export default App;
