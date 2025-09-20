import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface Timestamp {
  id: number;
  label: string;
  timestamp_seconds: number;
}

interface VideoComponentProps {
  youtubeId: string;
  title: string; // Add title to props
  startTime: number;
  timeStamp: Timestamp[];
  setTimestamp: (time: number) => void;
}

export default function VideoComponent({ youtubeId, title, startTime, timeStamp, setTimestamp }: VideoComponentProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {/* Display the video title instead of the messy ID */}
        <Typography component="span">{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <iframe
          // The key is essential for forcing the video to update
          key={`${youtubeId}-${startTime}`}
          width="560"
          height="315"
          // The src is now built with a clean ID and correct '?'
          src={`https://www.youtube.com/embed/${youtubeId}?start=${startTime}&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <div>
          {timeStamp.map((timestamp) => (
            <button
              key={timestamp.id}
              onClick={() => setTimestamp(timestamp.timestamp_seconds)}
            >
              {timestamp.label} - {timestamp.timestamp_seconds}s
            </button>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
}