import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./App.css"; // Import Tailwind and global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
