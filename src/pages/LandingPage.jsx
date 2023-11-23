import React from 'react'
import Col from 'react-bootstrap/Col'
import Row  from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';



function Landingpage() {
  const navigateByUrl = useNavigate()
  return (
    <>
  <Row className={'mt-5 mb-5 d-flex justify-content-center align-items-center w-100'}>
    <Col> </Col>
    <Col lg={5}>
      <h3>Welcome To <span className='text-primary fw-semibold'>Neo Player</span></h3>
      <p className='mt-3' style={{textAlign:"justify"}}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur nemo fugiat magni, voluptates ea unde libero repellendus iure dolore quis. Nesciunt sapiente culpa non numquam ullam iusto optio dolore pariatur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quisquam et nesciunt ut, facilis illo eos repudiandae perspiciatis ad consequuntur labore suscipit, exercitationem nobis delectus reiciendis dolor eius illum quia?
      </p>
      <button onClick={()=>navigateByUrl('/home')} className='btn btn-info mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
    </Col>
    <Col></Col>
    <Col lg={5} className='p-0 '>
      {/* <img src="https://media.giphy.com/media/046RPSib9t6yTS9kWl/giphy.gif" alt="no image" />
      <img src="https://media.giphy.com/media/WFmjWifrj9DJ50YaXj/giphy.gif" alt="no image" /> */}
      <img style={{width:"500px",height:'500px',borderRadius:"38px"}} className=' ' src="https://media.giphy.com/media/rBz4EnQ4OkkWMRs9Gc/giphy.gif" alt="no img" />
      {/* <img src="https://media.giphy.com/media/Y5zCzDO5ueFEWKW8uS/giphy.gif" alt="no image" /> */}
      {/* <img src="https://media.giphy.com/media/Y4zH48IwYcnCRaGm9E/giphy.gif" alt="no image" />
      <img src="https://media.giphy.com/media/0kLTOwoYXHZgrkGQOO/giphy.gif" alt="no image" />
      <img src="" alt="no image" /> */}
    </Col>
  </Row>
  <div className='container mt-5 mb-5 d-flex flex-column justify-content-center align-items-center flex-column'>
    <h3 className='text-dark fs-1 mb-5 mt-4 fw-semibold'>Features</h3>
  <div className='cards d-flex justify-content-evenly align-items-center w-100 mb-5'>
  <Card className='p-4 bg-dark' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} className='rounded' src="https://media.giphy.com/media/rBz4EnQ4OkkWMRs9Gc/giphy.gif" />
      <Card.Body className='text-light'>
        <Card.Title>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4 bg-dark' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} className='rounded' src="https://media.giphy.com/media/1Y8qn9udTcAAT8b3rv/giphy.gif" />
      <Card.Body className='text-light'>
        <Card.Title>Categorised Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className='p-4 bg-dark' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} className='rounded' src="https://media.giphy.com/media/2wZouMVMoOeCviwQTc/giphy.gif" />
      <Card.Body className='text-light'>
        <Card.Title>Watch history</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card> 
  </div>

  <div className="container border rounded p-4 border-info">
      <div className="row">
        <div className="col-lg-6">
          <h3 className='mb-4 text-dark'>Simple fast and powerful.</h3>
          <h6 className='mb-3 '><span className='fw-bolder fs-5 text-info'>Play everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, obcaecati assumenda? Natus provident maiores itaque, recusandae ullam, distinctio atque temporibus ratione aperiam, vel quasi repellendus quae similique commodi aliquid neque!</h6>
          
          <h6 className='mb-3'><span className='fw-bolder fs-5 text-info'>Play everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, obcaecati assumenda? Natus provident maiores itaque, recusandae ullam, distinctio atque temporibus ratione aperiam, vel quasi repellendus quae similique commodi aliquid neque!</h6>
          
          <h6 className='mb-3'><span className='fw-bolder fs-5 text-info'>Play everything</span> : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, obcaecati assumenda? Natus provident maiores itaque, recusandae ullam, distinctio atque temporibus ratione aperiam, vel quasi repellendus quae similique commodi aliquid neque!</h6>
        </div>
        <div className="col-lg-6">
        <iframe className='w-100 h-100 rounded' src="https://www.youtube.com/embed/XbGs_qK2PQA?si=hNl8cvi3ODaZ6iZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XbGs_qK2PQA?si=hNl8cvi3ODaZ6iZS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Landingpage