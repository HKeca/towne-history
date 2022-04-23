import React from 'react';
import ReactDOM from 'react-dom/client';
import TestCanvas from './TestCanvas';
import RingCanvas from './Ring';

const App = () => (
  <div>
    <RingCanvas />
  </div>
);

const root = ReactDOM.createRoot(
  document.querySelector('.app')
);

root.render(<App />);
