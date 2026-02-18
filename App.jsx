import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Welcome from './components/Welcome';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Welcome />} />
          <Route path="module/:moduleId/:topicId" element={<TopicPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
