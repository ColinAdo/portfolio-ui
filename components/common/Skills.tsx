import React from "react";
import Image from "next/image";

const skills = [
  {
    name: "APIs",
    img: "https://cdn-icons-png.flaticon.com/512/3407/3407038.png",
  },
  {
    name: "Django Rest Framework",
    img: "https://www.django-rest-framework.org/img/logo.png",
  },
  {
    name: "Django",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
  },
  {
    name: "React",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "React Native",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PowerBI",
    img: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png",
  },
  {
    name: "Docker",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
  },
  {
    name: "Git & Github",
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
];

const SkillCard = ({ name, img }: { name: string; img: string }) => (
  <div className="flex flex-col items-center shadow hover:scale-105 transition-transform">
    <Image
      src={img}
      alt={name}
      width={64}
      height={64}
      className="object-contain mb-3"
      loading="lazy"
    />
    <span className="text-white text-lg font-medium text-center">{name}</span>
  </div>
);

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center mb-12">
          {skills.map((skill) => (
            <SkillCard key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>
        <div className="glass-morphism p-8 rounded-2xl max-w-2xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-white mb-4">
            What I Bring to the Table
          </h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              ✨ <span className="text-emerald-300">Full-stack expertise</span>{" "}
              with modern frameworks and technologies
            </p>
            <p className="leading-relaxed">
              🎨{" "}
              <span className="text-emerald-300">
                Design-focused development
              </span>{" "}
              creating beautiful, intuitive interfaces
            </p>
            <p className="leading-relaxed">
              🚀{" "}
              <span className="text-emerald-300">Performance optimization</span>{" "}
              ensuring fast, scalable applications
            </p>
            <p className="leading-relaxed">
              🔧{" "}
              <span className="text-emerald-300">Problem-solving mindset</span>{" "}
              tackling complex technical challenges
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
