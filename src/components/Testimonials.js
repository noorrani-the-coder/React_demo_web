import React from 'react';
import './Testimonials.css';

function Results() {
  const videos = [
    {
      id: 1,
      src: '/video1.mp4',
      caption: '⭐ TRUST iN DRIVE CARS',
        poster: 'poster1.jpg',
    },
    {
      id: 2,
      src: '/video2.mp4',
      caption: '⭐ CLIENT TESTIMONIALS',
        poster: 'poster2.jpg',
    },
    {
      id: 3,
      src: '/video3.mp4',
      caption: '⭐ SUCCESS STORY',
        poster: 'poster3.jpg',
    },
  ]

  return (
   <section id="testimonials" className="results-section">
      <h2 className="section-title">Stories of Growth and Success from Our Clients</h2>
      <div className="video-row">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <video
              controls
              preload="metadata"
              loop
              muted
              playsInline
              className="video-full"
              poster={video.poster}
              onError={() => console.error(`Failed to load: ${video.src}`)}
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-caption">{video.caption}</div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Results;
