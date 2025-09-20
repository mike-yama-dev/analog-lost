import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import VideoComponent from '../components/videoComponent';

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

export default function Welcome({ videos }: VideoAccordionProps) {
  // State to hold the start times for each video, e.g., { videoId1: 65, videoId2: 120 }
  const [day1Time, setDay1Time] = useState(videos[0]?.timestamps[0]?.timestamp_seconds || 0);
  const [day2Time, setDay2Time] = useState(videos[1]?.timestamps[0]?.timestamp_seconds || 0);
  const [day3Time, setDay3Time] = useState(videos[2]?.timestamps[0]?.timestamp_seconds || 0);
  const [day4Time, setDay4Time] = useState(videos[3]?.timestamps[0]?.timestamp_seconds || 0);
  const [day5Time, setDay5Time] = useState(videos[4]?.timestamps[0]?.timestamp_seconds || 0);
  const [day6Time, setDay6Time] = useState(videos[5]?.timestamps[0]?.timestamp_seconds || 0);
  const [day7Time, setDay7Time] = useState(videos[6]?.timestamps[0]?.timestamp_seconds || 0);

  const [paranormal1Time, setParanormal1Time] = useState(0);
  const [paranormal2Time, setParanormal2Time] = useState(0);
  const [paranormal3Time, setParanormal3Time] = useState(0);

  return (
    <div>
      {videos.map((video) => {
        let startTime = 0;
        let setTimestampFunction = (time: number) => {};
        if (video.id === 1) {
          startTime = day1Time;
          setTimestampFunction = setDay1Time;
        } else if (video.id === 2) {
          startTime = day2Time;
          setTimestampFunction = setDay2Time;
        } else if (video.id === 3) {
          startTime = day3Time;
          setTimestampFunction = setDay3Time;
        } else if (video.id === 4) {
          startTime = day4Time;
          setTimestampFunction = setDay4Time;
        } else if (video.id === 5) {            
          startTime = day5Time;
          setTimestampFunction = setDay5Time;
        }

        return (
          <VideoComponent
            key={video.id}
            youtubeId={video.youtube_id}
            startTime={startTime}
            timeStamp={video.timestamps}
            setTimestamp={setTimestampFunction}
          />
        );
      })}
    </div>
  );
}