import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './videoComponent.css'; // Import the CSS file for styling

// Define the shape of your props for better type safety
interface Timestamp {
  id: number;
  label: string;
  timestamp_seconds: number;
}

interface VideoComponentProps {
  youtubeId: string;
  startTime: number;
  timeStamp?: Timestamp[]; // Made timeStamp optional to allow for a default value
  setTimestamp: (time: number) => void;
  title: string;
  autoPlay: boolean; // New prop to control autoplay
}

export default function VideoComponent({
  youtubeId,
  startTime,
  timeStamp = [], // FIX: Default to an empty array to prevent map error
  setTimestamp,
  title,
  autoPlay,
}: VideoComponentProps) {
  return (
    <div className="mb-6" style={{maxWidth: '560px', margin: '0 auto',  }}>
    <Accordion   sx={{ 
    background: 'rgba(255, 255, 255, 0.85)',
    boxShadow: 'none', // Optional: removes the default shadow which can look odd
    borderRadius: '15px',
    marginBottom: '1rem' // Optional: adds rounded corners
  }}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ color: '#090021', marginTop: '1rem' }} // Dark theme styles
      >
        <Typography component="span" style={{ fontFamily: 'Bebas Neue', fontSize: '1.5rem' }}>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails sx={{ backgroundColor: 'rgba(252, 252, 252, 0.5)', marginBottom: '1rem', fontFamily: 'Bebas Neue' }}>
        {/* Container for the responsive iframe */}
        <div className="relative" style={{ paddingBottom: '56.25%', marginBottom: '1rem',  height: 0, overflow: 'hidden' }}>
          <iframe
            // Add a dynamic key to force re-render on prop change
            key={`${youtubeId}-${startTime}`}
            className="absolute top-0 left-0 w-full h-full" // Use classes for sizing
            src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=${autoPlay ? 1 : 0}&rel=0&modestbranding=1&playsinline=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="flex flex-col justify-start items-start mt-4 space-y-2">
          {timeStamp.map((timestamp) => (
            <button
              key={timestamp.id}
              onClick={() => setTimestamp(timestamp.timestamp_seconds)}
              className="underline cursor-pointer" // Added some basic styling
              style={{ fontFamily: 'Bebas Neue', color: '#090021', fontSize: '1.35rem'  }} // Consistent font styling
              id="timestamp-button"
            >
              <p>{timestamp.label}</p>
            </button>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
    </div>
  );
}

