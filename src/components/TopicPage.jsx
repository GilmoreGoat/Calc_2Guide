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
  if (!module) return <div>Module not found</div>;

  const topic = module.topics.find(t => t.id === topicId);
  if (!topic) return <div>Topic not found</div>;

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
    <article className="prose prose-slate max-w-none lg:prose-lg prose-headings:text-brand-700 prose-a:text-brand-600 prose-code:text-brand-800 prose-strong:text-brand-800">
      {/*
        Note: The h1 is rendered inside the article, so standard prose styles apply.
        However, usually h1 is outside or styled specially. Let's keep it here.
      */}
      <h1 className="text-3xl font-bold text-slate-800 mb-6">{topic.title}</h1>

      {renderContent()}

      {topic.practiceType && (
        <PracticeSection type={topic.practiceType} />
      )}
    </article>
  );
};

export default TopicPage;
