import React from "react";
import { projects } from "../constants";

const ProjectsPage = () => (
  <div className="min-h-screen bg-primary text-white py-16 px-4 max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-center">Projects & Events</h1>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, idx) => (
        <div key={project.name + idx} className="bg-black-100 rounded-xl p-6 shadow-lg flex flex-col">
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded mb-4" />
          <h2 className="text-2xl font-semibold mb-2">{project.name}</h2>
          <p className="text-secondary mb-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map(tag => (
              <span key={tag.name} className={`text-xs px-2 py-1 rounded ${tag.color}`}>#{tag.name}</span>
            ))}
          </div>
          <a href={project.source_code_link} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline mt-auto">Learn more</a>
        </div>
      ))}
    </div>
  </div>
);

export default ProjectsPage; 