import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [video , setVideo] = useState({
    id:"",
    caption:"",
    url:"",
    embedLiNK:""
  })
  //console.log(video);
  const embedVideoLink = (e) =>{
    const {value} = e.target
    //console.log(value.slice(-11));
    const link =`https://www.youtube.com/embed/${value.slice(-11)}`
    setVideo({...video,embedLiNK:link})
  }
  const handleUpload = async ()=>{
    const {id,caption,url,embedLiNK} = video
    if(!id || !caption || !url || !embedLiNK){
      toast.warning('please fill the form completely')
    }
    else{
      const response = await uploadAllVideo(video)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success(`${response.data.caption} is succefully uploaded`)

        //setting up value to pass to view component throught parent component home
        setUploadVideoStatus(response.data)

        //setting value to null
        setVideo({
          id:"",
          caption:"",
          url:"",
          embedLiNK:""
        })
        handleClose()
      }
      else{
        console.log(response);
        toast.error('Something went wrong , please try again later')
      }
    }
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="d-flex upload-container container justify-content-between">
            <div className='d-flex gap-2'>
              <h5>Upload new video</h5>
              <button onClick={handleShow} style={{background:'transparent',border:'none'}}><i className="fa-solid fa-cloud-arrow-up fa-2x" style={{color:'gold'}}></i></button>
            </div>
            <div className=''>
              <Link style={{textDecoration:'none',color:'white'}} to={'/watch-history'}> <h5><i className="fa-solid fa-arrow-right"></i> Watch History</h5></Link>
            </div>
      </div>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film" style={{color:'gold'}}></i> Upload videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form completly</p>
          <form action="" className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setVideo({...video,id:e.target.value})} type="text" placeholder="Enter Video ID" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setVideo({...video,caption:e.target.value})} type="text" placeholder="Enter Video caption" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>setVideo({...video,url:e.target.value})} type="text" placeholder="Enter Video Image URL" />
            </Form.Group>
            <Form.Group className="" controlId="formBasicEmail">
              <Form.Control onChange={(e)=>embedVideoLink(e)} type="text" placeholder="Enter Youtube Video Link" />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer theme="colored" closeOnClick draggable/>
    </>
  )
}

export default Add