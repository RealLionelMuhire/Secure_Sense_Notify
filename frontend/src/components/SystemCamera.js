import React, { useState } from 'react';
import './SystemCamera.css'; // Import the CSS file for styling

function SystemCamera() {
  // State to track the camera status (on/off)
  const [isCameraOn, setCameraStatus] = useState(false);

  // Function to toggle the camera status
  const toggleCamera = () => {
    setCameraStatus(!isCameraOn);
  };

  return (
    <div className="system-camera">
      <header>
        <h1>Secure Sense Notify</h1>
      </header>
      <div className="content">
        {/* Display camera status */}
        <div className={`status ${isCameraOn ? 'enabled' : 'disabled'}`}>
          {isCameraOn ? 'Enabled' : 'Disabled'}
        </div>
        <div className="toggle-button">
          {/* On/Off Button */}
          <label className={`switch ${isCameraOn ? 'enabled' : 'disabled'}`}>
            <input type="checkbox" onClick={toggleCamera} />
            <span className="slider round"></span>
          </label>
          <span className="toggle-text">Human Secure Sense</span>
        </div>
        <div className="log-list">
          {/* Log List */}
          <h2>System Camera Logs</h2>
          {/* Map through log entries and display them */}
          <ul>
            <li>
              <span>Date: YYYY-MM-DD HH:MM:SS</span>
              {/* Add more log details here */}
            </li>
            {/* Add more log entries as needed */}
          </ul>
        </div>
      </div>
      <footer>
        {/* Footer */}
        <div className="footer-content">
          <span>Contact Us</span>
          <span className="copyright">Copyright</span>
        </div>
      </footer>
    </div>
  );
}

export default SystemCamera;

