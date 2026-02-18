import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="module/:moduleId/:topicId" element={<TopicPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
