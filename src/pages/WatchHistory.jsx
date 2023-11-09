import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistory, getALLHistory } from '../services/allAPI'

function WatchHistory() {

  const [history , setHistory] = useState([])

  const getHistory = async()=>{
    const {data} = await getALLHistory()
    console.log(data);
    setHistory(data)
  }

  const handleDelete = async(id)=>{
    await deleteHistory(id)
    getHistory()
  }

  useEffect(()=>{
    getHistory()
  },[])

  
  return (
    <div className='container mt-5 mb-5'>
      <div className='d-flex justify-content-between'>
        <h2>Watch Hsitory</h2>
        <div className='d-flex align-items-center justify-content-center'><Link style={{textDecoration:'none',color:'white',fontSize:'20px'}} to={'/home'}><h5><i class="fa-solid fa-arrow-right fa-rotate-180" style={{color:'white'}}></i> Back to home</h5></Link></div>
      </div>
      <div className='table-container p-4'>
        <Table >
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>URL</th>
              <th>Watched Time</th>
              <th>Action</th>
            </tr>  
          </thead>
            <tbody>
            {history.length>0?
              history.map((item)=>(<tr>
                <td>{item.id}</td>
                <td>{item.caption}</td>
                <td><Link to={item.embedLiNK} target='_blank'>{item.embedLiNK}</Link></td>
                <td>{item.timeStamp}</td>
                <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button></td>
              </tr>))
            :
            <p>You didn't watched anything yet</p>
            }
            </tbody> 
        </Table>
      </div>
    </div>
  )
}

export default WatchHistory