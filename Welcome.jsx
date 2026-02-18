import React from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Welcome = () => {
  return (
    <div className="max-w-4xl mx-auto text-center py-20">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
        Master Calculus II
        <span className="block text-brand-600">UCSD Math 10B</span>
      </h1>
      <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
        A comprehensive guide to Integral Calculus, Differential Equations, and their applications. 
        Designed with clarity and precision for UCSD students.
      </p>
      
      <div className="flex justify-center gap-4">
        <NavLink
          to="/module/module-1/antiderivatives"
          className="inline-flex items-center px-8 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200"
        >
          Start Learning <ArrowRight className="ml-2 w-5 h-5" />
        </NavLink>
        <a 
          href="https://catalog.ucsd.edu/courses/MATH.html" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors"
        >
          View Catalog
        </a>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">∫</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Integral Calculus</h3>
          <p className="text-slate-600">Master indefinite and definite integrals, the Fundamental Theorem of Calculus, and various integration techniques.</p>
        </div>
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl text-purple-600">A</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Applications</h3>
          <p className="text-slate-600">Apply integration to find areas, volumes, work, and average values in physical and geometric contexts.</p>
        </div>
        <div className="p-6 bg-white rounded-xl border border-slate-100 shadow-sm">
          <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl text-teal-600">dy/dx</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900 mb-2">Differential Equations</h3>
          <p className="text-slate-600">Learn to solve separable differential equations and model real-world growth and decay problems.</p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
