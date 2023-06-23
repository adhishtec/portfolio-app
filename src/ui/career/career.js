import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import img from '../../assets/images/digree.png'
import tcs from '../../assets/images/tcsimg.png'
import lloyds from '../../assets/images/lloyds.png'
import ge from '../../assets/images/ge.png'
import celcom from '../../assets/images/celcom.png'
import generali from '../../assets/images/generali.png'
import dropp from '../../assets/images/dropp.png'
import { borderRadius, width } from '@mui/system';
import '../../ui/career/career.scss'
import Detail from '../../ui/career/detail'
import { Image, Popup,Button } from 'semantic-ui-react'
import { useState } from 'react';
import { getCareer } from '../../data/dataProvider';

export default function Career() {

  const[isHover,setHover]= useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const[CareerData,setCareerData]= React.useState({})
  const[dataObj,setDataObj]= React.useState({})

  React.useEffect(()=>{
      const data = getCareer()
      setCareerData(data)
  },[getCareer()])
 

  React.useEffect(()=>{

    console.log('...>',CareerData.digreeAndEducation)
  
},[CareerData])



  function details(){
    setHover(true)
  } 


  const openModal = (data) => {
     setIsModalOpen(true);
     setDataObj(data)
   
  };

  const closeModal = () => {
    setIsModalOpen(false);
    
  };
 
  return (
    <>
    { CareerData.digreeAndEducation?.map((data)=>{
      return(
      <Timeline position="alternate">
      <Detail isOpen={isModalOpen} onClose={closeModal} obj={dataObj}/>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2" 
          color="text.secondary"
        >
         {data.startYear}-{data.endYear}
        </TimelineOppositeContent>
        <TimelineSeparator>
            <h3>{data.title}</h3>
          <TimelineConnector />
          <TimelineDot color="primary">
          <img className='imageicon' src={data.imgSrc} width={'100px'} onClick={()=> openModal(data) } />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '120px', px: 2 }}>
          <Typography variant="h6" component="span">
          {''}
          </Typography>
          <Typography>{data.fullName}</Typography>
          <Typography>{data.responsiblities}</Typography>
          
        </TimelineContent>
      </TimelineItem>     
    </Timeline>
      )
    })} 
    
  </>
  );
}

