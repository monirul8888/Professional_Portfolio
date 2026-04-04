import React from "react";
import { ArrowUpRight, CheckCircle2, Play } from "lucide-react";

import {
  SiScikitlearn,
  SiPython,
  SiFastapi,
  SiOpenai,
  SiReact,
  SiN8N,
} from "react-icons/si";

// Tech stack icon mapping
const techIcons = {
  React: SiReact,
  "Scikit-learn": SiScikitlearn,
  FastAPI: SiFastapi,
  Python: SiPython,
  "OpenAI API": SiOpenai,
  n8n: SiN8N,
};

/* Projects Data */
const projectsData = [
  {
    title: "AI Diabetes Prediction SaaS",
    company: "AI Automation Workflow",
    period: "Integrated Design Project",
    description:
      "A SaaS web application that predicts diabetes risk using a machine learning model. Users submit health data through a form and instantly receive predictions powered by a Scikit-learn model served through FastAPI. n8n automates AI workflows and integrates AI health suggestions.",
    results: [
      "Built ML prediction API with FastAPI",
      "Automated AI workflow using n8n",
      "Implemented SaaS usage limit (5 predictions/month)",
      "Integrated OpenAI for AI health suggestions",
    ],
    tech: ["React", "FastAPI", "Python", "Scikit-learn", "n8n", "OpenAI API"],
    image:
      "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&auto=format&fit=crop&q=60",
    link: "http://my-diabetes-app.surge.sh", // live project
    linkLabel: "View Live Demo",
    video: "https://drive.google.com/file/d/1VOHJBoVYmbouGIb7So12CcpkfN3KCWNn/view", // promo video
    videoLabel: "Watch Video",
    badge: "5 Free Predictions/Month",
  },
];

export const ProjectsSection = ({ id = "projects" }) => {
  return (
    <section id={id} className="bg-white py-20 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-gray-500 font-semibold">
            Projects
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Featured AI Projects
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Real-world projects demonstrating AI engineering, machine learning,
            SaaS architecture, and automation workflows.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projectsData.map((project) => (
            <article
              key={project.title}
              className="group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Freemium Badge */}
              {project.badge && (
                <span className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  {project.badge}
                </span>
              )}

              {/* Image */}
              <div className="overflow-hidden h-48 relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="text-xs uppercase tracking-wider font-semibold text-gray-500 mb-2">
                  {project.company} • {project.period}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5">{project.description}</p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-gray-400 mt-[2px]" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Footer: Tech + Buttons */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t pt-4">
                  {/* Tech Icons */}
                  <div className="flex gap-3 flex-wrap">
                    {project.tech.slice(0, 5).map((tech) => {
                      const Icon = techIcons[tech] || SiPython;
                      return (
                        <div
                          key={tech}
                          title={tech}
                          className="p-2 border rounded-md bg-gray-50 hover:bg-gray-100 transition"
                        >
                          <Icon className="w-5 h-5 text-gray-700" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 flex-wrap">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-black text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-800 transition-all shadow-md"
                      >
                        {project.linkLabel || "View Project"}
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-100 text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-all shadow-sm"
                      >
                        {project.videoLabel || "Watch Video"}
                        <Play className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;