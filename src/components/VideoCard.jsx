import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { addToHistory, deleteAVideo } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function VideoCard({displayVideo,setDeleteVideoStatus,isPresent}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() => {
    
    setShow(true);


  const {caption,embedUrl} = displayVideo
  const today = new Date()
  let timestamp = new Intl.DateTimeFormat('en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
  console.log(timestamp);

  let videoDetails = {
    caption,embedUrl,timestamp
  }

  const response = await addToHistory(videoDetails)
  console.log(response);
}

  const removeVideo = async(id)=>{
    await deleteAVideo(id)
    setDeleteVideoStatus(true)
  }

  //function to drag particular card
  const dragStart = (e,id)=>{
    console.log(`card that dragged is ${id}`);
        //to transfer id from videocard to category
    e.dataTransfer.setData("videoID",id)
  }

  return (
    <>
    
    <Card className='mb-3' style={{ height: '18rem',width:'' }} draggable onDragStart={(e)=>dragStart(e,displayVideo?.id)}>
      <Card.Img onClick={handleShow} height={'180px'} variant="top" src={displayVideo.imgUrl} />
      <Card.Body>
        <Card.Title style={{fontSize:'14px'}}>{displayVideo.caption}</Card.Title>
        
        {
        isPresent ?<Button  variant=""><i class="fa-regular fa-trash-can text-info"></i></Button>:
        <Button onClick={()=>removeVideo(displayVideo?.id)} variant=""><i class="fa-regular fa-trash-can text-dark"></i></Button>
        }
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{displayVideo.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='rounded-3' width="100%" height="523" src={`${displayVideo.embedUrl}?autoplay=1`} title={displayVideo.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>

    </>
  )
}

export default VideoCard