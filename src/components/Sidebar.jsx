import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { curriculum } from '../../curriculum';
import cookieLogo from '../assets/cookie-logo.svg';

const Sidebar = () => {
  const [openModules, setOpenModules] = useState({});

  const toggleModule = (moduleId) => {
    setOpenModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    <aside className="w-64 bg-white border-r border-brand-200 h-screen overflow-y-auto flex-shrink-0 sticky top-0 shadow-sm shadow-brand-100/50">
      <div className="p-4 border-b border-brand-100">
        <NavLink to="/" className="flex items-center space-x-3 text-slate-900 font-extrabold text-xl tracking-tight">
          <img src={cookieLogo} alt="Logo" className="w-8 h-8 drop-shadow-sm" />
          <span>Math 10B</span>
        </NavLink>
      </div>
      <nav className="p-4 space-y-2">
        {curriculum.map((module) => (
          <div key={module.id} className="space-y-1">
            <button
              onClick={() => toggleModule(module.id)}
              className="flex items-center justify-between w-full p-2 text-left text-sm font-semibold text-slate-800 hover:bg-brand-50 rounded-xl transition-colors"
            >
              <span>{module.title}</span>
              {openModules[module.id] ? (
                <ChevronDown className="w-4 h-4 text-brand-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-brand-400" />
              )}
            </button>
            
            {openModules[module.id] && (
              <div className="pl-4 space-y-1 mt-1 border-l-2 border-brand-100 ml-2">
                {module.topics.map((topic) => (
                  <NavLink
                    key={topic.id}
                    to={`/module/${module.id}/${topic.id}`}
                    className={({ isActive }) =>
                      `block p-2 pl-3 text-sm rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'bg-brand-100 text-brand-900 font-bold shadow-sm shadow-brand-100'
                          : 'text-slate-600 hover:bg-brand-50 hover:text-slate-900 hover:pl-4'
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
