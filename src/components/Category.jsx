import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { toast } from 'react-toastify';
import { Col, Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
import 'react-toastify/dist/ReactToastify.css';

function Category() {

  const [show, setShow] = useState(false);
  const [categoryName , setCategoryName] = useState("")
  const [category,setCategory] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleAddCategory = async()=>{
    console.log(categoryName);
    if(categoryName){


      let body ={
        categoryName,
        allVideos:[]
      }
      const response = await addToCategory(body)
      console.log(response);

      if(response.status>=200 && response.status<300){
        toast.success('Category added successfully.')
        //get all category
        allCategory()
        //to empty the state
        setCategoryName("")
        //close modal
        handleClose()
      }
      else{
        toast.error('Something went wrong, please try again later.')
      }
    }
    else{
      toast.warning('Please enter a category name!')
    }

  }

  //function to get all categories
  const allCategory = async()=>{
    const {data} = await getAllCategory()
    /* console.log(data); */
    setCategory(data)
  }

  console.log(category);

  //function to delete category
  const removeCategory = async(id)=>{
    await deleteACategory(id)
    //to get the remaining category
    allCategory()
  }

  //function to prevent refreshing of the page
  const dragOver = (e)=>{
    e.preventDefault()
  }

  //function to drop video card to category
  const videoDrop = async(e,categoryId)=>{
    console.log(`Category in which videocard is dropped:${categoryId}`);
    let videoID = e.dataTransfer.getData("videoID")
    console.log(videoID);

    //api to get a video
    const {data} = await getAVideo(videoID)
    console.log(data);
    //category object
    let selectedCategory = category.find((item)=>item?.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryId,selectedCategory)

    allCategory()

  }

  useEffect(()=>{
    allCategory()
  },[])



  return (
    <>
    
    <div className="d-grid ms-3">
      <button className='btn btn-warning w-75 ms-4 mb-4' onClick={handleShow}>Add a category</button>
    </div>

    { category?.length>0?
      category?.map((item)=>(
      <div className="ms-5 me-5 mb-2 mt-2 border border-2  border-warning p-3 rounded" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
      <div className="d-flex justify-content-between align-items-center">
        <h6 className='text-dark'>{item.categoryName}</h6>
        <button onClick={()=>removeCategory(item?.id)} className='border-0'><i className='fa-solid fa-trash-can'></i></button>
      </div>

        <Row>
          <Col className=''>
          {
            item?.allVideos.length>0?
            item?.allVideos.map((card)=>(
            <VideoCard displayVideo={card} isPresent= {true} />
            ))
            :<p>Nothing to display!</p>
          }
          </Col>
        </Row>

    </div>

      ))
      : <p className='fw-semibold ms-5  text-danger'>No Categories added yet.</p>
    }



    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className='border border rounded p-3'>

          <Form.Group className='mb-3   rounded' controlId='formBasicEmail' >
            <Form.Label>Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Category name" style={{border:"1px solid  #939191"}} onChange={(e)=>setCategoryName(e.target.value)}></Form.Control>
          </Form.Group>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddCategory} variant="primary">
            Add
          </Button>
        </Modal.Footer>
        
      </Modal>
    
    </>
  )
}

export default Category