import React from 'react';
import './App.css'; // You can create and import your main CSS file

// Import your custom components
import SystemCamera from './components/SystemCamera';
import VideoPlayback from './components/VideoPlayback';

function App() {
  return (
    <div className="App">
      {/* Add navigation (tabs or menu) */}
      <nav>
        <ul>
          <li>System Camera</li>
          <li>Video Playback</li>
        </ul>
      </nav>

      {/* Render components based on selected tab */}
      {/* For now, we'll display System Camera by default */}
      <SystemCamera />
    </div>
  );
}

export default App;

