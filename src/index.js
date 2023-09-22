import React from 'react';
import ReactDOM from 'react-dom/client';
import { AnimatedProgressBar, ProgressBar } from './components/ProgressBar';
import './index.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { Suspense } from 'react';

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import("./App")), 5000)
  });
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Suspense fallback={<ProgressBar />}>
        <Home />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);


