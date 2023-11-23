import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {

  const[allVideo,setAllVideo] = useState([])

  const [deleteVideoStatus,setDeleteVideoStatus] = useState (false)

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
    /* console.log(response); */
    const {data} = response
    /* console.log(data); */
    setAllVideo(data)
  }

  console.log(setAllVideo);

  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])

  return (
    <>
    
    <Row className=''>
      {allVideo.length>0?
      allVideo.map((video)=>(<Col className='mb-4' sm={12} md={6} lg={4} xl={3}>
        <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
        </Col>))
         :
      <p>No videos added yet.</p>
      }
    </Row>

    </>
  )
}

export default View