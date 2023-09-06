import React from 'react';
import './VideoPlayback.css'; // Import the CSS file for styling

function VideoPlayback() {
  return (
    <div className="video-playback">
      <h1>Secure Sense Notify</h1>
      {/* Video Player */}
      <div className="video-player">
        {/* Include your video player component here */}
      </div>
      {/* Back to Logs Button */}
      <button className="back-button">Back to Logs</button>
    </div>
  );
}

export default VideoPlayback;

