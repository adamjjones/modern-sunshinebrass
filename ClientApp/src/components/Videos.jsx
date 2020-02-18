import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const videoIds = [
  "voxBmYm1r3U",
  "4h9Gng11ztU",
  // "voxBmYm1r3U",
  "WdDw5FcryW4",
  "2F8L0EsZEf8",
  "6m6v7AQIrGI",
  "SZd2TjYO3oI",
  "it8Rtq6AXnw"]

class Videos extends Component {
  render() {
    return (
      <div>
        {
          videoIds.map(v => {
            return (
              <div className="mapped-videos video-container">
                <iframe title={`sunshine-video-${v}`} src={`https://www.youtube.com/embed/${v}`}></iframe>
              </div>
            )
          })
        }
        <p className="footer">Please consider buying <Link to="/Christmas">JOY!</Link>, the album on which this piece appears.</p>
      </div>
    );
  }
}

export default Videos;