import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAHistory, getAllHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';

function WatchHistory() {
  const [history,setHistory] = useState({})
  const watchAllHistory = async()  =>{
    const {data} = await getAllHistory()
    console.log(data);
    setHistory(data)
  } 

  //function for deleting a history
  const removeAHistory = async(id)=>{
    await deleteAHistory(id)
    //to get the remaining history
    watchAllHistory()
  }


  useEffect(()=>{
    watchAllHistory()
  },[])



  return (
    <>
    
    <div className="container mt-5 d-flex justify-content-between">
      <h1>Watch History</h1>
      <Link to={'/home'}className='d-flex align-items-center' style={{textDecoration:"none",color:"black",fontSize:'20px'}}>
        <i class="fa-solid fa-arrow-left fa-beat me-2"></i>
        Back to home
      </Link>
    </div>

    <table className='table mt-5 mb-5 container'>
      <thead>
        <tr>
          <th>#</th>
          <th>Caption</th>
          <th>URL</th>
          <th>Time stamp</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {
        history?.length>0?
        history?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td><a href={item.embedUrl} target='_blank'>{item.embedUrl}</a></td>
          <td>{item.timestamp}</td>
          <td><Button variant="" onClick={()=>removeAHistory(item?.id)}><i class="fa-regular fa-trash-can text-dark"></i></Button></td>
        </tr>))
          
        :
        <p className='fw-semibold fs-5 text-danger'>No History available.</p>
        }
      </tbody>
    </table>
    
    </>
  )
}

export default WatchHistory