import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Button from '@mui/material/Button'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fade from '@mui/material/Fade';
import img from '../../assets/adhish.png'
import {getUserData} from '../../data/dataProvider'
import LinearProgress from '@mui/material/LinearProgress';
import resume from '../../assets/adhish_nigam.pdf'
import FormGroup from '@mui/material/FormGroup';
import vdo from '../../assets/images/myvideo.mp4'

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      });
    }
  };

  return (
    <Fade in={trigger}>

      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

 

export default function BackToTop(props) {
  const [getDescription,setDescription]=React.useState()
  const [getObject,setObject]=React.useState({})
  React.useEffect(()=>{
  setDescription(getUserData().description)
  setObject(getUserData())

  console.log(getObject)
  },[])

  const [progress, setProgress] = React.useState(0);
  const [buffer, setBuffer] = React.useState(10);

  const progressRef = React.useRef(() => {});
  React.useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
      }
    };
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);


  return (
    <React.Fragment>
      <CssBaseline />
      <Toolbar id="back-to-top-anchor" />
      <div className='start-container'>
  
        <img src={img} className='profileimg'/>
        <Box className="video-box">
        <video width="auto" height="270" autoPlay muted >
        <source src= {vdo} type="video/ogg"/>
      </video>
      </Box>
        </div>
        <Container className='last-container'>
        <Box className='nametitle'>
          <p>
            <a>
          {getObject.name}
          </a>
          </p>
        </Box>
        <Box>
          {getObject.phone}
        </Box>
        <Box>
          {getObject.address}
        </Box>
        <Box sx={{ my: 2 }}>
          {getDescription}
        </Box>

        <Box sx={{ my: 2 }}>
  
        <Button variant="contained">
        Resume</Button>
        </Box>
      </Container>
    </React.Fragment>
  );
}