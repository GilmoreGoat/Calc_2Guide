import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { RefreshCw, Check, HelpCircle, ChevronRight, AlertCircle, Sparkles } from 'lucide-react';
import { generateProblem } from '../utils/questionGenerator';
import { validateMath } from '../utils/mathValidator';

const PracticeSection = ({ type }) => {
  const [problem, setProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const loadProblem = () => {
    const newProblem = generateProblem(type);
    setProblem(newProblem);
    setUserAnswer('');
    setFeedback(null);
    setShowHint(false);
  };

  useEffect(() => {
    if (type) {
      loadProblem();
    }
  }, [type]);

  const handleCheck = () => {
    if (!problem) return;

    const { isCorrect, message } = validateMath(userAnswer, problem.answer, problem.type);

    if (isCorrect) {
      setFeedback({ type: 'success', message });
    } else {
      setFeedback({ type: 'error', message });
    }
  };

  if (!type) return null;

  return (
    <div className="mt-16 bg-white rounded-[2.5rem] shadow-cookie border border-brand-50/50 overflow-hidden animate-in slide-in-from-bottom-8 duration-700">
      <div className="p-10 border-b border-brand-100 bg-brand-300 flex flex-col sm:flex-row justify-between items-center gap-6">
        <h2 className="text-3xl font-black text-white flex items-center gap-3 drop-shadow-sm">
          <Sparkles className="w-8 h-8 text-white fill-current" />
          Fresh Practice
        </h2>
        <button
          onClick={loadProblem}
          className="flex items-center gap-2 px-8 py-3 text-sm font-black uppercase tracking-wider text-black bg-white rounded-full hover:scale-105 hover:bg-slate-50 transition-all shadow-lg shadow-black/10"
        >
          <RefreshCw className="w-4 h-4" />
          Bake New Problem
        </button>
      </div>

      <div className="p-10 space-y-10">
        {problem ? (
          <>
            <div className="bg-brand-50/50 p-10 rounded-[2rem] border-2 border-brand-100/50 shadow-inner">
              <div className="text-xs font-black text-brand-400 mb-4 uppercase tracking-widest">Problem Statement</div>
              <div className="prose prose-xl prose-slate max-w-none text-black font-bold">
                <ReactMarkdown
                  children={problem.question}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col gap-4">
                <label className="block text-lg font-black text-black ml-4">
                  Your Answer
                  {problem.type === 'text' && (
                    <span className="text-slate-400 font-medium ml-3 text-base italic">
                      (e.g., x^2 + C)
                    </span>
                  )}
                </label>
                <div className="flex flex-col md:flex-row gap-6">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    className="flex-1 rounded-full border-4 border-brand-100 shadow-sm focus:border-brand-400 focus:ring-0 focus:outline-none px-8 py-4 text-xl font-mono bg-brand-50/30 transition-all placeholder:text-brand-200 text-black"
                    placeholder={problem.type === 'text' ? "Type your solution..." : "Enter the value..."}
                  />
                  <button
                    onClick={handleCheck}
                    className="px-12 py-4 bg-black text-white text-lg font-black rounded-full hover:bg-slate-800 hover:scale-105 hover:shadow-cookie-hover transition-all flex items-center justify-center gap-3 shadow-cookie"
                  >
                    <Check className="w-6 h-6" />
                    Check
                  </button>
                </div>
              </div>

              {feedback && (
                <div className={`p-8 rounded-[2rem] flex items-start gap-6 animate-in slide-in-from-top-4 duration-500 shadow-lg ${
                  feedback.type === 'success'
                    ? 'bg-green-50 text-green-900 border-2 border-green-100 shadow-green-100'
                    : 'bg-red-50 text-red-900 border-2 border-red-100 shadow-red-100'
                }`}>
                  <div className={`p-3 rounded-full flex-shrink-0 ${feedback.type === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                    {feedback.type === 'success' ? <Check className="w-6 h-6 stroke-[3]" /> : <AlertCircle className="w-6 h-6 stroke-[3]" />}
                  </div>
                  <div className="pt-1">
                    <h4 className={`text-xl font-black mb-1 ${feedback.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
                        {feedback.type === 'success' ? 'Sweet Success!' : 'Not quite right...'}
                    </h4>
                    <span className="font-medium text-lg opacity-90">{feedback.message}</span>
                  </div>
                </div>
              )}

              <div className="pt-6 border-t border-brand-50">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="group flex items-center gap-3 text-brand-400 hover:text-brand-600 font-bold transition-colors ml-2"
                >
                  <div className="bg-brand-100 p-2 rounded-full group-hover:bg-brand-200 transition-colors">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <span>{showHint ? 'Hide Hint' : 'Need a hint?'}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${showHint ? 'rotate-90' : ''}`} />
                </button>

                {showHint && (
                  <div className="mt-6 text-slate-700 bg-brand-50/50 p-8 rounded-[2rem] border border-brand-100 animate-in fade-in slide-in-from-top-4 duration-300 shadow-inner">
                     <div className="text-xs font-black text-brand-400 mb-3 uppercase tracking-widest">Hint</div>
                     <div className="prose prose-lg prose-slate max-w-none font-medium">
                      <ReactMarkdown
                        children={problem.hint}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-24 text-brand-200 bg-brand-50/30 rounded-[2.5rem] border-4 border-dashed border-brand-100 flex flex-col items-center justify-center gap-4">
            <Sparkles className="w-12 h-12 opacity-50" />
            <span className="font-bold text-xl">Select a topic to start baking problems.</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;
