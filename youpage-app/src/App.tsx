import React from 'react'; // Import React (required for older tooling; fine to keep with TSX)
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import YouPage from './pages/YouPage'; // Import the main page component
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Resume from './pages/Resume';
import Christ from './pages/Christ';

// Root App component – acts as a simple wrapper. Useful expansion point later
// (e.g., add routing, global context providers, error boundaries, theme, etc.).
const App: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<YouPage />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/christ" element={<Christ />} />
        </Routes>
    </BrowserRouter>
);

export default App; // Export for use in index.tsx
