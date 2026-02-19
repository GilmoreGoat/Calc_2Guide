import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { ChevronDown, ChevronRight, Lightbulb } from 'lucide-react';

const SteppedExample = ({ title, problem, steps }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="my-8 border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
      <div className="bg-slate-50 p-4 border-b border-slate-200 flex items-start gap-3">
        <div className="bg-brand-100 p-2 rounded-lg text-brand-600 mt-1">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-slate-800 text-lg">{title}</h3>
          <div className="prose prose-slate max-w-none mt-1">
            <ReactMarkdown
              children={problem}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          </div>
        </div>
      </div>

      <div className="divide-y divide-slate-100">
        {steps.map((step, index) => (
          <div key={index} className={`transition-all duration-300 ${index > activeStep ? 'opacity-50 grayscale' : 'opacity-100'}`}>
            <button
              onClick={() => setActiveStep(prev => index <= prev ? prev : index === prev + 1 ? index : prev)}
              disabled={index > activeStep + 1}
              className={`w-full text-left p-4 flex gap-4 hover:bg-slate-50 transition-colors ${index === activeStep + 1 ? 'cursor-pointer animate-pulse bg-brand-50/30' : ''}`}
            >
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border ${
                index <= activeStep
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white text-slate-400 border-slate-200'
              }`}>
                {index + 1}
              </div>
              <div className="flex-1">
                {index <= activeStep ? (
                   <div className="prose prose-slate max-w-none">
                     <ReactMarkdown
                       children={step.text}
                       remarkPlugins={[remarkMath]}
                       rehypePlugins={[rehypeKatex]}
                     />
                     {step.math && (
                       <div className="mt-2 p-3 bg-slate-50 rounded border border-slate-200 overflow-x-auto">
                         <ReactMarkdown
                           children={step.math}
                           remarkPlugins={[remarkMath]}
                           rehypePlugins={[rehypeKatex]}
                         />
                       </div>
                     )}
                   </div>
                ) : (
                  <div className="text-slate-400 italic">Click "Next Step" to reveal</div>
                )}
              </div>
              <div className="text-slate-400">
                {index < activeStep ? <div className="w-5 h-5" /> : index === activeStep ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
              </div>
            </button>

            {index === activeStep && index < steps.length - 1 && (
              <div className="px-16 pb-4">
                <button
                  onClick={() => setActiveStep(index + 1)}
                  className="px-4 py-2 bg-brand-600 text-white text-sm font-medium rounded-lg hover:bg-brand-700 transition-colors"
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
