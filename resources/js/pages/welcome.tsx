import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Timestamp {
  id: string | number;
  time: number;
  label: string;
}

interface Video {
  id: string | number;
  title: string;
  youtube_id: string;
  timestamps: Timestamp[];
}

interface WelcomeProps {
  videos: Video[];
}

export default function Welcome({ videos }: WelcomeProps) {
  // State to hold the start times for each video, e.g., { videoId1: 65, videoId2: 120 }
  const [startTimes, setStartTimes] = useState<Record<string | number, number>>({});

  // Function to update the start time for a specific video
  const handleTimestampClick = (videoId: string | number, time: number) => {
    setStartTimes((prevTimes) => ({
      ...prevTimes, // Keep all other video times
      [videoId]: time, // Update the time for the specific video
    }));
  };

  return (
    <div>
      {videos.map((video) => {
        // Get the current start time for this video, or default to 0
        const currentStartTime = startTimes[video.id] || 0;

        return (
          <Accordion key={video.id}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls={`panel-${video.id}-content`}
              id={`panel-${video.id}-header`}
            >
              <Typography>{video.title}</Typography>
            </AccordionSummary>

            {/* Main video iframe */}
            <AccordionDetails>
              <iframe
                // The key is important! It forces the iframe to re-mount when the src changes.
                key={`${video.id}-${currentStartTime}`}
                width="560"
                height="315"
                // Note: The first URL parameter must use '?' instead of '&'
                src={`https://www.youtube.com/embed/${
                  video.youtube_id
                }?start=${currentStartTime}&autoplay=1`}
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
                  onClick={() => handleTimestampClick(video.id, timestamp.time)}
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

