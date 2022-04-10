import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container as HTMLElement);
const app = (
    <React.StrictMode>
            <App />
    </React.StrictMode>
);

root.render(app);
