import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight, Menu } from 'lucide-react';
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
    <aside className="w-80 h-screen overflow-y-auto flex-shrink-0 sticky top-0 py-6 pl-6 z-20">
      <div className="bg-white h-full rounded-[2.5rem] shadow-cookie flex flex-col border border-brand-100/50">

        {/* Logo Section */}
        <div className="p-8 border-b border-brand-50 flex flex-col items-center text-center space-y-3">
          <NavLink to="/" className="group">
            <div className="relative transform transition-transform group-hover:scale-110 duration-300">
               <img src={cookieLogo} alt="Logo" className="w-16 h-16 drop-shadow-md" />
            </div>
          </NavLink>
          <NavLink to="/" className="font-black text-2xl tracking-tighter text-black group-hover:text-brand-500 transition-colors">
            MATH 10B
          </NavLink>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-4 overflow-y-auto custom-scrollbar">
          {curriculum.map((module) => (
            <div key={module.id} className="space-y-2">
              <button
                onClick={() => toggleModule(module.id)}
                className={`flex items-center justify-between w-full px-5 py-3 text-left text-sm font-bold rounded-2xl transition-all duration-300 ${
                  openModules[module.id]
                    ? 'bg-brand-50 text-brand-900 shadow-sm'
                    : 'text-slate-600 hover:bg-brand-50 hover:text-black'
                }`}
              >
                <span className="uppercase tracking-wide text-xs">{module.title}</span>
                {openModules[module.id] ? (
                  <ChevronDown className="w-4 h-4 text-brand-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-brand-300" />
                )}
              </button>

              {openModules[module.id] && (
                <div className="space-y-1 pl-2">
                  {module.topics.map((topic) => (
                    <NavLink
                      key={topic.id}
                      to={`/module/${module.id}/${topic.id}`}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-sm font-bold rounded-full transition-all duration-300 transform ${
                          isActive
                            ? 'bg-black text-white shadow-lg shadow-black/20 translate-x-1'
                            : 'text-slate-500 hover:bg-brand-100 hover:text-black hover:pl-7'
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

        {/* Footer/Extra */}
        <div className="p-6 text-center text-xs text-brand-300 font-bold uppercase tracking-widest border-t border-brand-50">
          Crumbl Aesthetic
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
