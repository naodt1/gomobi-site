import React from 'react'
import { FaFigma, FaReact, FaGithub } from 'react-icons/fa'
import { SiFlutter, SiFirebase, SiSupabase } from 'react-icons/si'

export const ToolsUsed = () => {
  const tools = [
    { 
      name: 'Figma', 
      icon: <FaFigma className="text-pink-600" />,
      purpose: 'UI/UX Design',
      color: 'bg-pink-100'
    },
    { 
      name: 'Flutter', 
      icon: <SiFlutter className="text-blue-500" />,
      purpose: 'Cross-Platform',
      color: 'bg-blue-100'
    },
    { 
      name: 'React Native', 
      icon: <FaReact className="text-sky-500" />,
      purpose: 'Native Apps',
      color: 'bg-sky-100'
    },
    { 
      name: 'Firebase', 
      icon: <SiFirebase className="text-amber-500" />,
      purpose: 'Auth & Analytics',
      color: 'bg-amber-100'
    },
    { 
      name: 'Supabase', 
      icon: <SiSupabase className="text-emerald-600" />,
      purpose: 'PostgreSQL Backend',
      color: 'bg-emerald-100'
    },
    { 
      name: 'GitHub', 
      icon: <FaGithub className="text-gray-800" />,
      purpose: 'Version Control',
      color: 'bg-gray-100'
    }
  ]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-center text-lg font-medium text-gray-700 mb-6">
        Production-Grade Stack
      </h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <div 
            key={index}
            className={`flex items-center gap-4 p-4 rounded-xl ${tool.color} hover:shadow-md transition-all`}
          >
            <div className="text-3xl">
              {tool.icon}
            </div>
            <div>
              <p className="font-medium text-gray-800">{tool.name}</p>
              <p className="text-xs text-gray-600 mt-1">{tool.purpose}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        Every tool is battle-tested across multiple client projects
      </div>
    </div>
  )
}