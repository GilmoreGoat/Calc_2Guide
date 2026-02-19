import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-6xl font-extrabold text-black mb-6 tracking-tight">
        Master Calculus II
        <span className="block text-brand-500 mt-2">UCSD Math 10B</span>
      </h1>
      <p className="text-xl text-slate-700 mb-12 max-w-2xl mx-auto font-medium">
        A comprehensive guide to Integral Calculus, Differential Equations, and their applications. 
        Designed with clarity and precision for UCSD students.
      </p>
      
      <div className="flex justify-center gap-6">
        <NavLink
          to="/module/module-1/approximating-areas"
          className="inline-flex items-center px-10 py-4 bg-brand-400 text-black text-lg font-bold rounded-2xl hover:bg-brand-500 hover:scale-105 transition-all shadow-xl shadow-brand-200"
        >
          Start Learning <ArrowRight className="ml-2 w-6 h-6" />
        </NavLink>
        <a 
          href="https://catalog.ucsd.edu/courses/MATH.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-4 bg-white text-black text-lg font-bold border-2 border-brand-200 rounded-2xl hover:bg-brand-50 hover:border-brand-300 transition-all shadow-md shadow-brand-100"
        >
          View Catalog
        </a>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-100 border border-brand-50 hover:shadow-2xl hover:shadow-brand-200 transition-shadow">
          <div className="w-14 h-14 bg-brand-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl font-serif text-brand-600">∫</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Integral Calculus</h3>
          <p className="text-slate-600 leading-relaxed">Master indefinite and definite integrals, the Fundamental Theorem of Calculus, and various integration techniques.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-100 border border-brand-50 hover:shadow-2xl hover:shadow-brand-200 transition-shadow">
          <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl font-serif text-purple-600">A</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Applications</h3>
          <p className="text-slate-600 leading-relaxed">Apply integration to find areas, volumes, work, and average values in physical and geometric contexts.</p>
        </div>
        <div className="p-8 bg-white rounded-3xl shadow-xl shadow-brand-100 border border-brand-50 hover:shadow-2xl hover:shadow-brand-200 transition-shadow">
          <div className="w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-2xl font-serif text-teal-600 italic">dy/dx</span>
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Differential Equations</h3>
          <p className="text-slate-600 leading-relaxed">Learn to solve separable differential equations and model real-world growth and decay problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
