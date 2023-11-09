import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { addToHistory, deleteVideo } from '../services/allAPI';

function Videocard({display,setDeleteVideoStatus}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async() =>{
    setShow(true)

    const {caption,embedLiNK}= display
    const today = new Date
    //console.log(today)

    const timeStamp = new Intl.DateTimeFormat('en-US',{
      year:'numeric',
      month:'2-digit',
      day:'2-digit',
      hour:'2-digit',
      minute:'2-digit',
      second:'2-digit'
    }).format(today)
    //console.log(timeStamp);

    let videoDetials ={
      caption,
      embedLiNK,
      timeStamp
    }
    await addToHistory(videoDetials)
  }

  const removeVideo = async(id)=>{
    const response = await deleteVideo(id)
    //console.log(response);
    setDeleteVideoStatus(true)
  } 

  const dragstarted = (e,id)=>{
    console.log(`card no ${id} started dragging`);
    e.dataTransfer.setData("videoID",id)
  }
  return (
    <>
      <div className='mt-4'>
          <Card style={{ width: '270px' }} draggable onDragStart={(e)=>dragstarted(e,display?.id)}>
          <Card.Img onClick={handleShow} style={{height:'300px',width:'269px'}} variant="top" src={display.url} />
          <Card.Body>
            <div className='d-flex justify-content-between p-1 gap-1'>
              <h6>
              {`${(display.caption).slice(0,20)}..`}
              </h6>
              <div className=''><button onClick={()=>removeVideo(display?.id)} className='btn btn-danger' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button></div>
            </div>
          </Card.Body>
          </Card>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{display.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="523" src={`${display.embedLiNK}?autoplay=1`} title={display.caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Videocard