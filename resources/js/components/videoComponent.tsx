import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
}

export default function VideoComponent({
  youtubeId,
  startTime,
  timeStamp = [], // FIX: Default to an empty array to prevent map error
  setTimestamp,
  title
}: VideoComponentProps) {
  return (
    <div className="mb-6" style={{ maxWidth: '560px', margin: '0 auto',  }}>
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        style={{ backgroundColor: '#4d4d4dff', color: '#FFFFFF' }} // Dark theme styles
      >
        <Typography component="span">{title}</Typography>
      </AccordionSummary>

      <AccordionDetails style={{ backgroundColor: '#616060ff' }}>
        {/* Container for the responsive iframe */}
        <div className="relative" style={{ paddingBottom: '56.25%',  }}>
          <iframe
            // Add a dynamic key to force re-render on prop change
            key={`${youtubeId}-${startTime}`}
            className="absolute top-0 left-0 w-full h-full" // Use classes for sizing
            src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}`}
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
              className="text-white underline" // Added some basic styling
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

