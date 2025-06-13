import {
  Hero,
  Skills,
  Reviews,
  Contact,
  Projects,
  Navigation,
  ScrollToTop,
} from "@/components/common";

export default function Page() {
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
}
