import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { curriculum } from '../../curriculum';
import PracticeSection from './PracticeSection';
import SteppedExample from './SteppedExample';

const TopicPage = () => {
  const { moduleId, topicId } = useParams();

  const module = curriculum.find(m => m.id === moduleId);
  if (!module) return <div className="p-8 text-center text-slate-500 font-bold">Module not found</div>;

  const topic = module.topics.find(t => t.id === topicId);
  if (!topic) return <div className="p-8 text-center text-slate-500 font-bold">Topic not found</div>;

  const renderContent = () => {
    if (Array.isArray(topic.content)) {
      return topic.content.map((block, index) => {
        if (block.type === 'text') {
          return (
            <ReactMarkdown
              key={index}
              children={block.content}
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            />
          );
        }
        if (block.type === 'stepped-example') {
          return (
            <SteppedExample
              key={index}
              title={block.title}
              problem={block.problem}
              steps={block.steps}
            />
          );
        }
        return null;
      });
    }

    return (
      <ReactMarkdown
        children={topic.content}
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
    );
  };

  return (
    <div className="space-y-12 pb-12 animate-in fade-in duration-500">
      <article className="bg-white rounded-[2.5rem] shadow-cookie p-10 md:p-14 border border-brand-50/50">
        <div className="border-b-4 border-brand-100 pb-8 mb-10">
          <span className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2 block">
            {module.title}
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-black tracking-tighter leading-tight">
            {topic.title}
          </h1>
        </div>

        <div className="prose prose-xl prose-slate max-w-none
          prose-headings:font-black prose-headings:text-black prose-headings:tracking-tight
          prose-p:text-slate-600 prose-p:leading-relaxed prose-p:font-medium
          prose-a:text-brand-500 prose-a:font-bold prose-a:no-underline hover:prose-a:text-brand-600
          prose-strong:text-black prose-strong:font-black
          prose-code:text-brand-600 prose-code:bg-brand-50 prose-code:px-2 prose-code:py-1 prose-code:rounded-lg prose-code:font-bold
          prose-ul:marker:text-brand-300 prose-li:marker:font-black
          prose-blockquote:border-l-4 prose-blockquote:border-brand-300 prose-blockquote:bg-brand-50/50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic
          prose-img:rounded-3xl prose-img:shadow-lg">
          {renderContent()}
        </div>
      </article>

      {topic.practiceType && (
        <PracticeSection type={topic.practiceType} />
      )}
    </div>
  );
};

export default TopicPage;
