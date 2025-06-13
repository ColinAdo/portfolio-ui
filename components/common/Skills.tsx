"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "React & Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "Python", level: 80 },
  { name: "UI/UX Design", level: 88 },
  { name: "Database Design", level: 82 },
];

const SkillBar = ({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), index * 200);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [index]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill.name}</span>
        <span className="text-emerald-300 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-800 rounded-full h-2">
        <div
          className={`h-2 bg-gradient-to-r from-emerald-400 to-emerald-300 rounded-full transition-all duration-1000 ease-out ${
            visible ? `w-[${skill.level}%]` : "w-0"
          }`}
          style={{ width: visible ? `${skill.level}%` : "0%" }}
        />
      </div>
    </div>
  );
};

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div className="glass-morphism p-8 rounded-2xl">
            <h3 className="font-display text-2xl font-bold text-white mb-4">
              What I Bring to the Table
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                ✨{" "}
                <span className="text-emerald-300">Full-stack expertise</span>{" "}
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
                <span className="text-emerald-300">
                  Performance optimization
                </span>{" "}
                ensuring fast, scalable applications
              </p>
              <p className="leading-relaxed">
                🔧{" "}
                <span className="text-emerald-300">
                  Problem-solving mindset
                </span>{" "}
                tackling complex technical challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
