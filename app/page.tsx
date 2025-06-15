import {
  Hero,
  Skills,
  Reviews,
  Contact,
  Projects,
  ScrollToTop,
} from "@/components/common";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Hero />
      <Skills />
      <Reviews />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}
