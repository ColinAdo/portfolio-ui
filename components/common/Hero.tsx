"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Creative</span>
              <span className="block gradient-text animate-float">
                Developer
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences that blend
              <span className="text-emerald-300 font-medium">
                {" "}
                innovative design{" "}
              </span>
              with cutting-edge technology
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-8">
              <Button
                onClick={scrollToProjects}
                className="bg-emerald-300 hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full emerald-glow transition-all duration-300"
              >
                View My Work
              </Button>

              <Button
                variant="outline"
                className="border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-black px-8 py-3 rounded-full transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-morphism emerald-glow">
                <img
                  src="/placeholder.svg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300/20 to-transparent"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-emerald-300 w-6 h-6" />
        </div>
      </div>
    </section>
  );
}
