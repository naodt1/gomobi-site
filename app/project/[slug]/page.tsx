import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Import project data (assuming you have a projects.json in the public directory)
import projectData from '../../../public/data/projects.json';

interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link?: string;
}

const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = params; // Get the 'slug' from the URL

    const project = projectData.find((p: Project) => p.link?.endsWith(slug));


    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Project Not Found</h1>
                    <p className="text-gray-600 dark:text-gray-400">Sorry, we couldn&#39;t find the project you were looking for.</p>
                    <a href="/" className="mt-4 text-blue-500 hover:underline">
                        Go back to homepage
                    </a>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
                >
                    <div className="aspect-w-16 aspect-h-9">
                        <Image src={project.imageUrl} alt={project.title} layout="responsive" width={800} height={450} objectFit="cover" />
                    </div>
                    <div className="p-6">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{project.title}</h1>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">{project.description}</p>
                        {/* You can add more project details here */}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectPage;
