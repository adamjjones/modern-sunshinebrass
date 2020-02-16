import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const videos = [
  "https://www.youtube.com/embed/4h9Gng11ztU",
  "https://www.youtube.com/embed/voxBmYm1r3U",
  "https://www.youtube.com/embed/WdDw5FcryW4",
  "https://www.youtube.com/embed/2F8L0EsZEf8",
  "https://www.youtube.com/embed/6m6v7AQIrGI",
  "https://www.youtube.com/embed/SZd2TjYO3oI",
  "https://www.youtube.com/embed/it8Rtq6AXnw"]

class Videos extends Component {
  render() {
    return (
      <>
        <div className="content video-container">
          <iframe width="900" height="600" src="https://www.youtube.com/embed/voxBmYm1r3U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        {
          videos.map(v => {
            return (
              <div className="mapped-videos video-container">
                <iframe src={v}></iframe>
              </div>
            )
          })
        }
        <p className="footer">Please consider buying <Link to="/Christmas">JOY!</Link>, the album on which this piece appears.</p>
      </>
    );
  }
}

export default Videos;