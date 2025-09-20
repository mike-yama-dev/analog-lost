import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


interface Video {
  id: string | number;
  title: string;
  youtube_id: string;
  timestamps: { id: string | number; timestamp_seconds: number; label: string }[];
}

interface WelcomeProps {
  videos: Video[];
}

export default function Welcome({ videos }: WelcomeProps) {
  const [startTimes, setStartTimes] = React.useState<Record<string | number, number>>({});
  
  // Log the state every time the component re-renders
  console.log('Component rendered. Current startTimes state:', startTimes);

  const handleTimestampClick = (videoId: string | number, timestamp_seconds: number) => {
    // 1. Log the incoming click event data
    console.log(`Timestamp clicked for videoId: ${videoId} with time: ${timestamp_seconds}`);
    
    // Defensive check: Ensure the time is a valid number before updating state
    if (typeof timestamp_seconds !== 'number') {
      console.error("Aborting state update: Invalid time value received.");
      return;
    }

    setStartTimes((prevTimes) => ({
      ...prevTimes,
      [videoId]: timestamp_seconds,
    }));
  };

  return (
    <div>
      {videos.map((video) => {
        const currentStartTime = startTimes[video.id] || 0;
        
        // 2. Log the values being used to build the iframe for each video
        const iframeKey = `${video.id}-${currentStartTime}`;
        console.log(`Rendering video "${video.title}". Key: "${iframeKey}"`);

        return (
          <Accordion key={video.id}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel-${video.id}-content`}
              id={`panel-${video.id}-header`}
            >
              <Typography>{video.title}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <iframe
                key={iframeKey} // Use the generated key
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${video.youtube_id}?start=${currentStartTime}&autoplay=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </AccordionDetails>

            {/* Timestamp buttons */}
            {video.timestamps.map((timestamp) => (
              <AccordionDetails key={timestamp.id} style={{ paddingTop: 0 }}>
                <button
                  onClick={() => handleTimestampClick(video.id, timestamp.timestamp_seconds)} // Ensure correct property name
                >
                  {timestamp.label}
                </button>
              </AccordionDetails>
            ))}
          </Accordion>
        );
      })}
    </div>
  );
}