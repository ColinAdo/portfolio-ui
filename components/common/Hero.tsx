"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link as Lk } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center sm:px-18 px-6 pt-20"
    >
      <div className="container mx-auto text-center animate-fade-in">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <h1 className="font-display text-2xl md:text-6xl lg:text-4xl font-bold leading-tight">
              <span className="block text-white">Hi my name is Colin Ado</span>
              <span className="block gradient-text animate-float text-emerald-300">
                a passionate Software Engineer
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
                className="bg-emerald-300 hover:cursor-pointer hover:bg-emerald-400 text-black font-semibold px-8 py-3 rounded-full emerald-glow transition-all duration-300"
              >
                View my work
              </Button>

              <Link
                href="https://drive.google.com/file/d/1ylVU7KhOG9xjM0o9mt586RuhzRwh-TfF/view?usp=sharing"
                target="_blank"
                className="text-white"
              >
                <span className="flex items-center gap-1 text-emerald-100 hover:text-emerald-300 font-semibold">
                  <Lk className="w-4 h-4" /> My Resume
                </span>
              </Link>
            </div>
          </div>

          {/* Photo Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-morphism emerald-glow">
                <Image
                  src="/colin.jpg"
                  width={384}
                  height={384}
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-emerald-300/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
