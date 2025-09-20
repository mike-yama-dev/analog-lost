
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function VideoComponent({ youtubeId, startTime, timeStamp, setTimestamp }: { youtubeId: string; startTime: number; timeStamp: any, setTimestamp: any }) {
    console.log('Rendering VideoComponent with props:', { youtubeId, startTime, timeStamp });
    return(
     <Accordion>

       <AccordionSummary
         expandIcon={<ArrowDropDownIcon />}
         aria-controls="panel1a-content"
         id="panel1a-header"
       >
         <Typography component="span">{youtubeId}</Typography>
       </AccordionSummary>

       <AccordionDetails>
         <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}&start=${startTime}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            <div>
                {timeStamp.map((timestamp: { id: string; label: string; time: number }) => (
                    <button key={timestamp.id} onClick={() => setTimestamp(timestamp.time)}>
                        {timestamp.label} - {timestamp.time}
                    </button>
                ))}
            </div>
       </AccordionDetails>



     </Accordion>
    );
}