import React, { useState } from 'react';
import VideoComponent from '../components/videoComponent';
import './welcome.css';
// Your interfaces here...
interface Timestamp {
  id: number;
  label: string;
  timestamp_seconds: number;
}

interface Video {
  id: number;
  title: string;
  youtube_id: string;
  timestamps: Timestamp[];
}

interface VideoAccordionProps {
  videos: Video[];
}

// FIX 1: Add a helper function to extract the clean YouTube ID
const getCleanYoutubeId = (url: string) => {
  // This splits the URL at the '?' and takes the first part.
  // It handles both clean IDs and full share links gracefully.
  return url.split('?')[0];
};

export default function Welcome({ videos }: VideoAccordionProps) {
  const [startTimes, setStartTimes] = useState<Record<number, number>>({});

  const handleTimestampUpdate = (videoId: number, time: number) => {
    setStartTimes((prevTimes) => ({
      ...prevTimes,
      [videoId]: time,
    }));
  };

  return (
    <div>
      <header style={{backgroundColor: '#090021', }}>
<div className="header-banner"></div>

      </header>
    <div style={{ padding: '1rem', minHeight: '100vh', backgroundImage: 'url(/background.png)', backgroundSize: '55rem', backgroundRepeat: 'repeat', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
      <h1 style={{  textAlign: 'center', backgroundColor: 'rgba(252, 252, 252, 0.88)', maxWidth: '20rem', margin: '0 auto', marginBottom: '1rem', fontFamily: 'Bebas Neue', color: '#090021' }} className="text-2xl rounded-xl p-2" >Get Lost Timestamps!</h1>
      {videos.map((video) => (
        <VideoComponent
          key={video.id}
          // Use the helper function to ensure the ID is always clean
          youtubeId={getCleanYoutubeId(video.youtube_id)}
          title={video.title} // Pass the title down for display
          // FIX 2: This robustly provides the current time or defaults to 0.
          // This directly solves the 'startTime: undefined' problem.
          startTime={startTimes[video.id] || 0}
          timeStamp={video.timestamps}
          setTimestamp={(time) => handleTimestampUpdate(video.id, time)}
        />
      ))}
    </div>
    </div>
  );
}