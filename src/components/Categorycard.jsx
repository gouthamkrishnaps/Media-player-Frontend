import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { addToHistory} from '../services/allAPI';

function Categorycard({display}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = async() =>{
        setShow(true);
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

  return (
    <>
        <div className='p-1'>
            <Card style={{ width: '100%' }}>
            <div className='d-flex justify-content-between'>
                <div className='d-flex align-items-center justify-content-center p-2'>
                    <Card.Img onClick={handleShow} style={{ width: '40px',height:'40px' }} variant="top" src={display.url} />
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                <h6>{`${(display.caption).slice(0,20)}..`}</h6>
                </div>
                <div className='p-2'><button /* onClick={()=>removeVideo(display?.id)} */ className='btn' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button></div>
            </div>
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

export default Categorycard