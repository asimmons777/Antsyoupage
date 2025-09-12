import React from 'react'; // React runtime (needed for JSX)
import { createRoot } from 'react-dom/client'; // React 18 createRoot API
import App from './App'; // Root component

// Grab the div#root that Vite/HTML template provides.
const container = document.getElementById('root');
if (!container) throw new Error('Root container missing in index.html'); // Fail fast if HTML changed.

// Create a React root (new API replaces legacy ReactDOM.render).
const root = createRoot(container);

// Mount the component tree. StrictMode helps highlight potential issues in dev.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);