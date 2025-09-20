import * as React from 'react';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon({videos}: {videos: any}) {
  console.log(videos);
  const [day2Time, setDay2Time] = useState(0);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 1 - Jerome, AZ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>

       <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 2 - Holbrook, AZ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/jhsk6Q5X3_w?si=O5zIMTortibrxahY&start=${day2Time}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

        </AccordionDetails>
        <AccordionDetails>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <button onClick={() => {
            setDay2Time(717);
          }}>Stream Starts</button>
                    <button onClick={() => {
            setDay2Time(2006);
          }}>On the road!</button>
          <button onClick={() => {
            setDay2Time(4394);
          }}>Breakfast</button>
          <button onClick={() => {
            setDay2Time(6704);
          }}>Back on the road</button>
          </div>
        </AccordionDetails>
      </Accordion>

             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 3 - Holbrook, AZ - extended</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>

             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 4 - Roswell, NM</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>

             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 5 - Alibene, TX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>
             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 6 - Jefferson, TX</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>

             <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Day 7 - New Orleans, LA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0lkhDuA7eMY?si=OjG7nOaSH53H-W10" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </AccordionDetails>
      </Accordion>



    </div>
  );
}