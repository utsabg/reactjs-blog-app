import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogListPage from './pages/BlogListPage';
import BlogDetailPage from './pages/BlogDetailPage';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>My Blog</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<BlogListPage />} />
            <Route path="/post/:id" element={<BlogDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;