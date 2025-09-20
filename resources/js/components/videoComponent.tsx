import React from 'react'; // Make sure to import React
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
  timeStamp: Timestamp[];
  setTimestamp: (time: number) => void;
}

export default function VideoComponent({ youtubeId, startTime, timeStamp, setTimestamp }: VideoComponentProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography component="span">{youtubeId}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        <iframe
          // FIX 1: Add a dynamic key. This is the most important change!
          key={`${youtubeId}-${startTime}`}
          width="560"
          height="315"
          // FIX 2: Use '?' for the first parameter and add autoplay for better UX
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
              // FIX 3: Use the correct property 'timestamp_seconds'
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