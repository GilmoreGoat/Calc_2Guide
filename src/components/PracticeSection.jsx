import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { RefreshCw, Check, HelpCircle, ChevronRight, AlertCircle } from 'lucide-react';
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
    <div className="mt-12 bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
      <div className="p-6 border-b border-slate-200 bg-slate-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
          <RefreshCw className="w-5 h-5 text-brand-600" />
          Practice Problems
        </h2>
        <button
          onClick={loadProblem}
          className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-brand-700 bg-white border border-slate-300 rounded-lg hover:bg-brand-50 hover:text-brand-800 hover:border-brand-300 transition-all shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          New Problem
        </button>
      </div>

      <div className="p-6 space-y-6">
        {problem ? (
          <>
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <div className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">Problem</div>
              <div className="prose prose-slate max-w-none text-lg">
                <ReactMarkdown
                  children={problem.question}
                  remarkPlugins={[remarkMath]}
                  rehypePlugins={[rehypeKatex]}
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="block text-sm font-medium text-slate-700">
                  Your Answer
                  {problem.type === 'text' && (
                    <span className="text-slate-500 font-normal ml-2 italic">
                      (e.g., x^2 + C, format fractions like 1/2)
                    </span>
                  )}
                </label>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={userAnswer}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleCheck()}
                    className="flex-1 rounded-lg border-slate-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 px-4 py-2 text-lg font-mono"
                    placeholder={problem.type === 'text' ? "Enter expression..." : "Enter number..."}
                  />
                  <button
                    onClick={handleCheck}
                    className="px-6 py-2 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors flex items-center gap-2 shadow-sm"
                  >
                    <Check className="w-5 h-5" />
                    Check
                  </button>
                </div>
              </div>

              {feedback && (
                <div className={`p-4 rounded-lg flex items-start gap-3 ${
                  feedback.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {feedback.type === 'success' ? <Check className="w-5 h-5 mt-0.5" /> : <AlertCircle className="w-5 h-5 mt-0.5" />}
                  <span className="font-medium">{feedback.message}</span>
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setShowHint(!showHint)}
                  className="text-sm text-brand-600 hover:text-brand-800 font-medium flex items-center gap-1 transition-colors"
                >
                  <HelpCircle className="w-4 h-4" />
                  {showHint ? 'Hide Hint' : 'Need a hint?'}
                  <ChevronRight className={`w-3 h-3 transition-transform ${showHint ? 'rotate-90' : ''}`} />
                </button>

                {showHint && (
                  <div className="mt-3 text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-200 animate-in fade-in slide-in-from-top-2 duration-200">
                     <div className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wide">Hint</div>
                     <div className="prose prose-sm max-w-none text-slate-700">
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
          <div className="text-center py-12 text-slate-500">
            Select a topic to verify practice problems.
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeSection;
