import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="max-w-6xl mx-auto text-center py-24 space-y-16">
      
      {/* Hero Section */}
      <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-7xl md:text-8xl font-black text-black tracking-tighter leading-tight drop-shadow-sm">
          Master Calculus
          <span className="block text-brand-300 mt-2 drop-shadow-sm">The Sweet Way</span>
        </h1>
        <p className="text-2xl text-slate-600 max-w-2xl mx-auto font-bold tracking-tight">
          UCSD Math 10B: Integral Calculus, Differential Equations, and Infinite Series served fresh.
        </p>

        <div className="flex justify-center gap-6 pt-8">
          <NavLink
            to="/module/module-1/approximating-areas"
            className="inline-flex items-center px-12 py-5 bg-black text-white text-xl font-black rounded-full hover:scale-105 hover:shadow-cookie-hover transition-all duration-300 shadow-cookie"
          >
            Start Learning <ArrowRight className="ml-3 w-6 h-6" />
          </NavLink>
          <a
            href="https://catalog.ucsd.edu/courses/MATH.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-12 py-5 bg-white text-black text-xl font-black border-4 border-brand-100 rounded-full hover:bg-brand-50 hover:border-brand-200 hover:scale-105 transition-all duration-300 shadow-sm"
          >
            View Syllabus
          </a>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-4">
        {[
          {
            title: "Integral Calculus",
            desc: "Master indefinite and definite integrals, the Fundamental Theorem of Calculus, and techniques.",
            icon: "∫",
            color: "bg-brand-100 text-brand-600"
          },
          {
            title: "Applications",
            desc: "Apply integration to find areas, volumes, work, and average values in physical contexts.",
            icon: "A",
            color: "bg-blue-100 text-blue-600"
          },
          {
            title: "Diff. Equations",
            desc: "Learn to solve separable differential equations and model real-world growth and decay.",
            icon: "dy/dx",
            color: "bg-purple-100 text-purple-600"
          }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-white rounded-[2.5rem] shadow-cookie hover:shadow-cookie-hover transition-all duration-300 transform hover:-translate-y-2 border border-brand-50 flex flex-col items-start group">
            <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
              <span className={`font-serif ${item.icon.length > 1 ? 'text-2xl italic' : 'text-4xl'}`}>{item.icon}</span>
            </div>
            <h3 className="text-2xl font-black text-black mb-3 tracking-tight">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Welcome;
