import React from 'react';
import ReactDOM from 'react-dom/client'; // Make sure to import from 'react-dom/client'
import App from './App'; // Adjust the path according to your file structure

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
