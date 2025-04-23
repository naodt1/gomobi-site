import React from 'react';
import projectsData from '@/public/data/projects.json';// Assuming projects.json is in your 'public/data' or a similar static assets folder
import NotFound from '@/app/not-found';

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Directly import the JSON data (Next.js can optimize this)
  const projects = projectsData;

  // Find the project that matches the slug
  const currentProject = projects.find((project) => project.link === slug);

  if (currentProject) {
    return (
<div className="p-8 bg-white shadow-lg rounded-lg overflow-hidden">
  <div className="mb-6">
    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{currentProject.title}</h2>
    {currentProject.link && (
      <a
        href={currentProject.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
      >
        View Project
      </a>
    )}
  </div>

  {currentProject.imageUrl && (
    <div className="mb-6 rounded-lg overflow-hidden">
      <img
        src={currentProject.imageUrl}
        alt={currentProject.title}
        className="w-full h-auto object-cover max-h-96" // Added max-h-96 to limit the image height
      />
    </div>
  )}

  <p className="text-gray-700 leading-relaxed mb-4">{currentProject.description}</p>

  <div className="prose prose-lg max-w-none text-gray-800">
    {/* Using dangerouslySetInnerHTML to render the HTML content */}
    <div dangerouslySetInnerHTML={{ __html: currentProject.detailedContent }} />
  </div>
</div>
    );
  } else {
    return <NotFound />; // Handle the case where the project is not found
  }
}