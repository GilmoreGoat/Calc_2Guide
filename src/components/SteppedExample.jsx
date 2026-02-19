import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';

const SteppedExample = ({ title, problem, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="my-10 bg-white rounded-[2rem] shadow-lg shadow-brand-100/50 border border-brand-50 overflow-hidden">
      <div className="bg-brand-50/50 p-6 border-b border-brand-100 flex items-start gap-4">
        <div className="bg-brand-300 p-2.5 rounded-xl text-white mt-1 shadow-sm">
          <Lightbulb className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-extrabold text-black text-xl mb-2">{title}</h3>
          <div className="prose prose-slate max-w-none prose-p:text-slate-700">
            <ReactMarkdown
              children={problem}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-brand-50">
        {steps.map((step, index) => (
          <div key={index} className={`transition-all duration-300 ${index > activeStep ? 'opacity-40 grayscale' : 'opacity-100'}`}>
            <button
              onClick={() => setActiveStep(prev => index <= prev ? prev : index === prev + 1 ? index : prev)}
              disabled={index > activeStep + 1}
              className={`w-full text-left p-6 flex gap-5 transition-colors group ${index === activeStep + 1 ? 'cursor-pointer hover:bg-brand-50/30' : ''}`}
            >
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg border-2 transition-all shadow-sm ${
                index <= activeStep
                  ? 'bg-black text-white border-black scale-110'
                  : 'bg-white text-brand-200 border-brand-100'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1 pt-1">
                {index <= activeStep ? (
                   <div className="prose prose-slate max-w-none prose-p:text-slate-800">
                     <ReactMarkdown
                       children={step.text}
                       remarkPlugins={[remarkMath]}
                       rehypePlugins={[rehypeKatex]}
                     />
                     {step.math && (
                       <div className="mt-4 p-4 bg-brand-50/50 rounded-2xl border border-brand-100 overflow-x-auto">
                         <ReactMarkdown
                           children={step.math}
                           remarkPlugins={[remarkMath]}
                           rehypePlugins={[rehypeKatex]}
                         />
                       </div>
                     )}
                   </div>
                ) : (
                  <div className="text-brand-300 font-medium italic">Click "Next Step" to reveal</div>
                )}
              </div>
              <div className="text-brand-200 pt-2">
                {index < activeStep ? (
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : index === activeStep ? (
                  <ChevronDown className="w-6 h-6 text-brand-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 group-hover:text-brand-300 transition-colors" />
                )}
              </div>
            </button>

            {index === activeStep && index < steps.length - 1 && (
              <div className="px-20 pb-8 pt-2">
                <button
                  onClick={() => setActiveStep(index + 1)}
                  className="px-6 py-3 bg-brand-300 text-black text-sm font-bold rounded-full hover:bg-brand-400 hover:scale-105 transition-all shadow-md"
                >
                  Reveal Next Step
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SteppedExample;
