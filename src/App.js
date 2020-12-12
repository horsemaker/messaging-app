import './App.css';
import React from 'react'; // 48.04
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
