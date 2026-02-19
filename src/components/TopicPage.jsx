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
  if (!module) return <div className="p-8 text-center text-slate-500">Module not found</div>;

  const topic = module.topics.find(t => t.id === topicId);
  if (!topic) return <div className="p-8 text-center text-slate-500">Topic not found</div>;

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
    <div className="space-y-8">
      {/* Crumbl Card Layout */}
      <article className="bg-white rounded-[2rem] shadow-xl shadow-brand-100/50 p-8 md:p-12 border border-brand-50">
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tight leading-tight">
          {topic.title}
        </h1>

        <div className="prose prose-lg prose-slate max-w-none
          prose-headings:font-bold prose-headings:text-black
          prose-p:text-slate-700 prose-p:leading-relaxed
          prose-a:text-brand-500 prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
          prose-strong:text-black prose-strong:font-bold
          prose-code:text-brand-600 prose-code:bg-brand-50 prose-code:px-1 prose-code:rounded-md prose-code:font-medium
          prose-ul:marker:text-brand-300
          prose-blockquote:border-l-brand-300 prose-blockquote:bg-brand-50/30 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-xl">
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
