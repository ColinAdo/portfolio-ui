import Image from "next/image";

import { Hero, Skills, Reviews, Projects } from "@/components/common";
// import { Contact } from "@/components/sections/Contact";
// import { Navigation } from "@/components/layout/Navigation";
// import { ScrollToTop } from "@/components/ui/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* <Navigation /> */}
      <Hero />
      <Skills />
      <Reviews />
      <Projects />
      {/*<Contact />
      <ScrollToTop /> */}
    </div>
  );
};

export default Index;
