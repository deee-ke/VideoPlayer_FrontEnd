import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteACategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Col, Row,   } from 'react-bootstrap';
import VedioCard from './VedioCard';

function Category() {
  const [show, setShow] = useState(false);

  const [CategoryName , setCategoryName] = useState("")

  const [category , setCategory] =useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //function to add category
  const handleCategory = async()=>{
    console.log(CategoryName);
    if(CategoryName){
          
      let body ={
        CategoryName,
        allvideos:[]

      }
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Added Successfully')
        // get all category
         allCategory()
        //to empty the state
        setCategoryName("")
        //close Modal
        handleClose()
      }
      else{
        toast.error('Something went Wrong. Please try Again')
      }
                                                              
    }
    else{
      toast.warning('please fill the category name')
    }
  }
  //function to get all categories
  const allCategory = async()=>{
  const {data} =  await getAllCategory()
   /*  console.log(data); */
   setCategory(data)
  }
  console.log(category);

// function to delete category
 const removeCategory = async(id)=>{
   await deleteACategory(id)
   // to get the remaining category
   allCategory()
 }

 //function to prevent reload
 const dragOver = (e)=>{
  e.preventDefault()
 }

 // function to drop videocard to category
 const videoDrop = async(e,Categoryid)=>{
  console.log(`Category in which videoCard is dropped:${Categoryid}`);
  let videoID = e.dataTransfer.getData("videoID")
  console.log(videoID);

  //api to get a video
  const {data} =await getAVideo(videoID)
  console.log(data);

 //category object
  let selectedCategory =category.find((item)=>item?.id==Categoryid)
  selectedCategory.allvideos.push(data)
  console.log(selectedCategory);

 await updateCategory(Categoryid,selectedCategory)   
 
 allCategory()


 }

  useEffect(()=>{
    allCategory()
  },[])


  return (
    <>
    <div className='d-grid ms-3'>
     <button onClick={handleShow} className='btn btn-warning'>Add New Category Video</button>
    </div>


  { category?.length>0?
  category?.map((item)=>(<div className='m-5 border border-secondary p-3 rounded' droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e, item?.id)}>
  <div className="d-flex justify-content-between align-items-center">
    <h6>{item.CategoryName}</h6>
    <button onClick={()=>removeCategory(item?.id)}  className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
   </div>
  
    <Row>
      <Col>
    
     {
      item?.allvideos.length>0?
      item?.allvideos.map((card)=>( <VedioCard displayVideo={card}/>))
      :<p>nothing to display</p>
     }

      </Col>
    </Row>
   
   </div>))
    : <p className='fw-bolder fs-5 text-danger m-3 '>Nothing to Display</p>
  
   }

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='border border-secondary rounded p-3'>

        <Form.Group className='mb-3' controlId="formBasicEmsil" >
           <Form.Label>Category Name</Form.Label>
          <Form.Control  type="text"placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)}/>
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000}/>

    </>
  )
}

export default Category