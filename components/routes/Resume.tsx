import React from "react";
import {
  Briefcase,
  Mail,
  MapPin,
  Phone,
  User,
  FolderGit2,
  Languages,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  summary,
  experience,
  projects,
  technicalSkills,
  professionalSkills,
  languages,
} from "@/data/resume";

const hobbies = [
  {
    icon: <BookOpen size={18} className="text-emerald-300" />,
    label: "Reading Tech & Design",
  },
  {
    icon: <Heart size={18} className="text-emerald-300" />,
    label: "Fitness & Running",
  },
  {
    icon: <Sparkles size={18} className="text-emerald-300" />,
    label: "Photography",
  },
  {
    icon: <FolderGit2 size={18} className="text-emerald-300" />,
    label: "Open Source",
  },
];

export default function Resume() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white/5 p-8 rounded-2xl glass-morphism shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-4xl font-display text-gray-200 font-bold gradient-text mb-1">
                COLIN ADO WATKAJA
              </h1>
              <Button
                asChild
                variant="secondary"
                className="bg-emerald-400/20 hover:bg-emerald-300/30 text-emerald-300 border-emerald-300"
              >
                <a href="/john-doe-resume.pdf" download target="_blank">
                  Download PDF
                </a>
              </Button>
            </div>
            <p className="text-lg text-gray-300">Full Stack Developer</p>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-3 text-gray-400">
              <span className="flex items-center gap-1">
                <MapPin size={16} />
                Kenya, Remote, Global
              </span>
              <span className="flex items-center gap-1">
                <Mail size={16} />
                inbox@mail.colinadore.tech
              </span>
              <span className="flex items-center gap-1">
                <Phone size={16} />
                +254 701 893 733
              </span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1.5px] w-full bg-gradient-to-r from-emerald-300/40 via-gray-600/40 to-emerald-300/40 mb-10" />

        {/* Summary Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Sparkles className="text-emerald-300" size={22} /> Summary
          </h2>
          <div className="bg-transparent rounded-xl p-5 text-gray-200 border border-emerald-300/20 text-lg shadow animate-fade-in">
            {summary}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Briefcase className="text-emerald-300" size={22} /> Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <div
                key={exp.role + i}
                className="p-5 rounded-xl bg-transparent border-emerald-300/20 border group hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div className="flex justify-between items-center">
                  <span className="text-emerald-300 font-semibold text-lg">
                    {exp.role}
                  </span>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <div className="text-gray-300">{exp.company}</div>
                <div className="text-gray-400 mt-2">{exp.description}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <FolderGit2 className="text-emerald-300" size={22} /> Projects
          </h2>
          <div className="space-y-5">
            {projects.map((proj, idx) => (
              <div
                key={proj.name}
                className="p-4 rounded-xl bg-transparent border-emerald-300/20 border hover:shadow-lg transition-shadow animate-fade-in"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <span className="text-emerald-300 font-semibold text-lg">
                      {proj.name}
                    </span>
                    <p className="text-gray-300 mt-1">{proj.description}</p>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    {proj.tech.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block bg-emerald-300/10 text-emerald-300 px-3 py-1 rounded-full text-xs border border-emerald-300/20 ml-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <User className="text-emerald-300" size={22} /> Skills
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Technical Skills (list format) */}
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                Technical Skills
              </h3>
              <ul className="space-y-2">
                {technicalSkills.map((skill) => (
                  <li
                    key={typeof skill === "string" ? skill : skill.name}
                    className="flex items-center gap-2 text-emerald-200 bg-gray-800/40 rounded px-4 py-2 font-medium text-sm shadow"
                  >
                    <Sparkles size={16} className="text-emerald-300" />
                    {typeof skill === "string" ? skill : skill.name}
                  </li>
                ))}
              </ul>
            </div>
            {/* Professional Skills */}
            <div className="md:flex-1">
              <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                Professional Skills
              </h3>
              <ul className="space-y-2">
                {professionalSkills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-emerald-200 bg-gray-800/40 rounded px-4 py-2 font-medium text-sm shadow"
                  >
                    <Sparkles size={16} className="text-emerald-300" /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Languages I speak */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Languages className="text-emerald-300" size={22} /> Languages I
            Speak
          </h2>
          <div className="flex gap-6 flex-wrap">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2 bg-gray-800/40 rounded-full px-4 py-2 text-emerald-200 text-sm font-medium shadow"
              >
                {lang.name}
                <span className="ml-2 text-emerald-400">({lang.level})</span>
              </div>
            ))}
          </div>
        </section>

        {/* Hobby Section */}
        <section>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
            <Heart className="text-emerald-300" size={22} /> Hobbies
          </h2>
          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4">
            {hobbies.map((hobby) => (
              <span
                key={hobby.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-300/10 text-emerald-200 font-medium text-sm glass-morphism border border-emerald-400/10 animate-fade-in"
              >
                {hobby.icon} {hobby.label}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
