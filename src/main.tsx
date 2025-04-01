import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./App.css"; // Import Tailwind and global styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">  {/* Global NavBar */}
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
