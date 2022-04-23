import React from 'react';
import ReactDOM from 'react-dom/client';


const App = () => (
  <div>
    hello
    test
  </div>
);

const root = ReactDOM.createRoot(
  document.querySelector('.app')
);

root.render(<App />);
