import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer} from 'react-toastify';


function Add({setUploadVideoStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [videos,setVideos] = useState({
    id:"",
    caption:"",
    imgUrl:"",
    embedUrl:""
  })
  console.log(videos);

  const embedVideoLink = (e)=>{
    const {value} = e.target
    console.log(value.slice(-11));
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setVideos({...videos,embedUrl:link})

    
  }
  const handleUpload = async ()=>{
    const {id,caption,imgUrl,embedUrl} = videos
    //if there is no values in input box
    if(!id || !caption || !imgUrl || !embedUrl){
      toast.warning('Oops you missed something!')
    }
    else{
      //if value in input box
      const response = await uploadAllVideo(videos)
      console.log(response);
      if(response.status >=200 && response.status <300){
        setUploadVideoStatus(response.data)
        toast.success(`${response.data.caption} is succesfully uploaded`)
        //
        setVideos({
          id:"",
          caption:"",
          imgUrl:"",
          embedUrl:""
        })
        //to close the modal
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong. Try again later')
      }
    }
  }


  return (
    <>
    
    <div className="d-flex align-items-center">
      <h5 className='me-2 mb-0'>Upload new video</h5>
      <button onClick={handleShow} className='btn'><i class="fa-solid fa-upload text-dark fs-4"></i></button>
    </div>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-link"></i> Upload video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the details.</p>

          <form action="" className=''>
            <Form.Group className='mb-3   rounded' controlId='formBasicEmail' style={{border:"1px solid  #939191"}}>
              <Form.Control type="text" placeholder="Enter video ID" onChange={(e)=>setVideos({...videos,id:e.target.value})}></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3   rounded' controlId='formBasicEmail' style={{border:"1px solid  #939191"}}>
              <Form.Control type="text" placeholder="Enter video caption" onChange={(e)=>setVideos({...videos,caption:e.target.value})}></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3   rounded' controlId='formBasicEmail' style={{border:"1px solid  #939191"}}>
              <Form.Control type="text" placeholder="Enter video image URL" onChange={(e)=>setVideos({...videos,imgUrl:e.target.value})}></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3  rounded' controlId='formBasicEmail' style={{border:"1px solid  #939191"}}>
              <Form.Control type="text" placeholder="Enter Youtube video link" onChange={embedVideoLink}></Form.Control>
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' autoClose={2500} />

    </>
  )
}

export default Add