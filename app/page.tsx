import {
  Hero,
  Skills,
  Reviews,
  Contact,
  Projects,
  Navigation,
  ScrollToTop,
} from "@/components/common";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navigation />
      <Hero />
      <Skills />
      <Reviews />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Index;
