import React from 'react'
import { FaFigma, FaReact, FaGithub } from 'react-icons/fa'
import { SiFlutter, SiFirebase } from 'react-icons/si'

export const ToolsUsed = () => {
  const tools = [
    { name: 'Figma', icon: <FaFigma size={28} className="text-pink-500" /> },
    { name: 'Flutter', icon: <SiFlutter size={28} className="text-blue-400" /> },
    { name: 'React', icon: <FaReact size={28} className="text-blue-500" /> },
    { name: 'Firebase', icon: <SiFirebase size={28} className="text-yellow-500" /> },
    { name: 'GitHub', icon: <FaGithub size={28} className="text-gray-800" /> },
  ]

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-6">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center space-y-1">
            <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md">
              {tool.icon}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
