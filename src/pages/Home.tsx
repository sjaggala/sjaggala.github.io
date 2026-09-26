import Hero from "../components/Hero";
import WhatIDo from "../components/WhatIDo";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <WhatIDo />
      <Work />
      <Skills />
      <Experience />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  );
}
