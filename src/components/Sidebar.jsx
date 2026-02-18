import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react';
import { curriculum } from '../data/curriculum';

const Sidebar = () => {
  const [openModules, setOpenModules] = useState({});

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <aside className="w-64 bg-white border-r border-slate-200 h-screen overflow-y-auto flex-shrink-0 sticky top-0">
      <div className="p-4 border-b border-slate-100">
        <NavLink to="/" className="flex items-center space-x-2 text-brand-600 font-bold text-xl">
          <BookOpen className="w-6 h-6" />
          <span>Math 10B</span>
        </NavLink>
      </div>
      <nav className="p-4 space-y-2">
        {curriculum.map((module) => (
          <div key={module.id} className="space-y-1">
            <button
              onClick={() => toggleModule(module.id)}
              className="flex items-center justify-between w-full p-2 text-left text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              <span>{module.title}</span>
              {openModules[module.id] ? (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-400" />
              )}
            </button>
            
            {openModules[module.id] && (
              <div className="pl-4 space-y-1 mt-1">
                {module.topics.map((topic) => (
                  <NavLink
                    key={topic.id}
                    to={`/module/${module.id}/${topic.id}`}
                    className={({ isActive }) =>
                      `block p-2 text-sm rounded-md transition-colors ${
                        isActive
                          ? 'bg-brand-50 text-brand-700 font-medium'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    {topic.title}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
