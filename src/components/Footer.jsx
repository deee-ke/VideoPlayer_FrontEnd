import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
        <div className='d-flex justify-content-evenly align-items-center w-100'>

            <div className="websites" style={{width:'400px'}}>
            <h4 className='mb-3 text-dark fw-semibold'>
            <i class="fa-solid fa-clapperboard me-2 text-dark"></i>
                    Neo Player
            </h4>
            <h6 style={{textAlign:"justify"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus voluptas cumque illum dolores amet, veritatis odio architecto. Dolorum a fugiat eos blanditiis atque magni quisquam veniam eaque exercitationem vel!
            </h6>
            <h6>Lorem ipsum dolor sit amet,</h6>
            </div>

            <div className="links d-flex flex-column">
              <h4 className='mb-3'>Links</h4>
              <Link to={'/'} style={{textDecoration:"none"}}>Landing Page</Link>
              <Link to={'/Home'} style={{textDecoration:"none"}}>Home Page</Link>
              <Link to={'/watch-history'} style={{textDecoration:"none"}}>Watch History</Link>
            </div>
            
            <div className="guides d-flex flex-column">
            <h4 className='mb-3'>Guides</h4>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none"}}>React</Link>
              <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:"none"}}>React Bootstrap</Link>
              <Link to={'https://bootswatch.com/'} style={{textDecoration:"none"}}>Bootswatch</Link>
            </div>

            <div className="contacts d-flex flex-column">
              <h4 className=''>Contact Us</h4>
              <div className="d-flex mb-3 ">
                <input type="text" className='form-control' placeholder='Enter your E-mail ID'style={{border:"1px solid grey"}}/>
                <button className='btn btn-dark ms-2'>Subscribe</button>
              </div>

              <div className="d-flex justify-content-evenly align-items-center">
              <Link to={'/'} style={{textDecoration:"none"}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link to={'/Home'} style={{textDecoration:"none"}}><i class="fa-brands fa-x-twitter fa-2x"></i></Link>
              <Link to={'/watch-history'} style={{textDecoration:"none"}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link to={'/watch-history'} style={{textDecoration:"none"}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
              </div>

            </div>

        </div>
        <p className='mt-5'>Copyright © 2023 Media Player.Built with React.</p>
    </div>
  )
}

export default Footer