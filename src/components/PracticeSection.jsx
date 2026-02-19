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
    <div className="mt-12 bg-white rounded-[2rem] shadow-xl shadow-brand-100/50 border border-brand-50 overflow-hidden">
      <div className="p-8 border-b border-brand-100 bg-brand-300 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-black text-black flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-white" />
          Practice Problems
        </h2>
        <button
          onClick={loadProblem}
          className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-black bg-white rounded-full hover:scale-105 hover:bg-slate-50 transition-all shadow-md"
        >
          <RefreshCw className="w-4 h-4" />
          New Problem
        </button>
      </div>

      <div className="p-8 space-y-8">
        {problem ? (
          <>
            <div className="bg-brand-50/50 p-8 rounded-3xl border border-brand-100">
              <div className="text-sm font-bold text-brand-500 mb-3 uppercase tracking-wider">Problem</div>
              <div className="prose prose-lg prose-slate max-w-none text-slate-800 font-medium">
                <ReactMarkdown
                  children={problem.question}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-3">
                <label className="block text-sm font-bold text-slate-700 ml-2">
                  Your Answer
                  {problem.type === 'text' && (
                    <span className="text-slate-400 font-normal ml-2 italic">
                      (e.g., x^2 + C)
                    </span>
                  )}
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    className="flex-1 rounded-2xl border-2 border-brand-200 shadow-sm focus:border-brand-400 focus:ring-brand-400 px-6 py-3 text-lg font-mono bg-white transition-all placeholder:text-slate-300"
                    placeholder={problem.type === 'text' ? "Enter expression..." : "Enter number..."}
                  />
                  <button
                    onClick={handleCheck}
                    className="px-10 py-3 bg-black text-white font-bold rounded-full hover:bg-slate-800 hover:scale-105 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Check className="w-5 h-5" />
                    Check
                  </button>
                </div>
              </div>

              {feedback && (
                <div className={`p-6 rounded-2xl flex items-start gap-4 animate-in slide-in-from-top-2 duration-300 ${
                  feedback.type === 'success'
                    ? 'bg-green-50 text-green-900 border border-green-100'
                    : 'bg-red-50 text-red-900 border border-red-100'
                }`}>
                  <div className={`p-2 rounded-full ${feedback.type === 'success' ? 'bg-green-200 text-green-700' : 'bg-red-200 text-red-700'}`}>
                    {feedback.type === 'success' ? <Check className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
                  </div>
                  <span className="font-bold text-lg mt-1">{feedback.message}</span>
                </div>
              )}

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-sm text-brand-500 hover:text-brand-700 font-bold flex items-center gap-2 transition-colors ml-1"
                >
                  <HelpCircle className="w-5 h-5" />
                  {showHint ? 'Hide Hint' : 'Need a hint?'}
                  <ChevronRight className={`w-4 h-4 transition-transform ${showHint ? 'rotate-90' : ''}`} />
                </button>

                {showHint && (
                  <div className="mt-4 text-slate-600 bg-brand-50 p-6 rounded-2xl border border-brand-100 animate-in fade-in slide-in-from-top-2 duration-200">
                     <div className="text-xs font-bold text-brand-400 mb-2 uppercase tracking-widest">Hint</div>
                     <div className="prose prose-slate max-w-none text-slate-800">
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
          <div className="text-center py-16 text-slate-400 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            Select a topic to generate practice problems.
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;
