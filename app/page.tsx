import Image from "next/image";

import { Hero } from "@/components/common";
import { Skills } from "@/components/common";
// import { Reviews } from "@/components/sections/Reviews";
// import { Projects } from "@/components/sections/Projects";
// import { Contact } from "@/components/sections/Contact";
// import { Navigation } from "@/components/layout/Navigation";
// import { ScrollToTop } from "@/components/ui/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* <Navigation /> */}
      <Hero />
      <Skills />
      {/* <Reviews />
      <Projects />
      <Contact />
      <ScrollToTop /> */}
    </div>
  );
};

export default Index;
