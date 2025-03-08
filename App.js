import React from 'react';
import Gallery from './Gallery';
import Header from './Header';
import Sidebar from './Sidebar'; // Import the Sidebar component
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-container">
        <Sidebar /> {/* Add the Sidebar component */}
        <div className="main-content">
          <Gallery />
        </div>
      </div>
    </div>
  );
}

export default App;