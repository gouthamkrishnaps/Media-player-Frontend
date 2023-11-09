import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategory, deleteCategory, getALLCategory, getaVideo, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import { Row , Col} from 'react-bootstrap';
import Videocard from './Videocard';

function Category() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [category,setCategory] = useState({})
  const [allCateogry,setAllCategory]= useState([])

  //function to add category
  const handleAddCategory = async()=>{
    console.log(category);
    if(category){
      let body ={
        category,
        allVideos : []
      }
      //make api call
      const response = await addToCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        toast.success('Category Successfully Added')
        //to make state null 
        setCategory('')
        //to close the modal
        handleClose()        
      }
      else{
        toast.error('Something went wrong. Please try again later')
      }
    }
    else{
      toast.warning('Please fill the form')
    }
  }

  const getAllCategory = async()=>{
    const {data} = await getALLCategory()
    /* console.log(data); */
    setAllCategory(data)
  }
  console.log(allCateogry);

  const removeCategory = async(id)=>{
    await deleteCategory(id)
    getAllCategory()
  }

  const dragover =(e)=>{
    //prevent reload ,so data send frm vdocard.jsx won't be lost
    e.preventDefault()
    console.log('inside dragover');
  }

  const videoDrop = async(e,cateogryid)=>{
    console.log(`dropped inside the categoryid ${cateogryid}`);
    const videoid = e.dataTransfer.getData("videoID")
    console.log(videoid);

    //api to get the particular vdo that is draged
    const {data} = await getaVideo(videoid)
    console.log(data);

    //to find a particular category with the specified id
    let selectedCategory = allCateogry?.find((item)=>item.id===cateogryid)
    console.log(selectedCategory);

    //data added to the array in the particular category with specifies id
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategory(cateogryid,selectedCategory)
    getAllCategory()
  }

  useEffect(()=>{
    getAllCategory()
  },[])
  return (
   
      <>
        <div>
            <button onClick={handleShow} style={{width:'300px'}} className='btn btn-warning'> Add New Category</button>
        </div>

        {
          allCateogry?.length>0?
          allCateogry?.map((item)=>(
            <div className='mt-4 border border-secondary rounded p-3'>
              <div className='d-flex justify-content-between align-items-center' droppable onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
                <h6>{item.category}</h6>
                <button onClick={()=>removeCategory(item?.id)} className='btn btn-danger' style={{border:'none'}}><i class="fa-solid fa-trash-can"></i></button>
              </div>
              <Row>
                <Col>
                {
                  item.allVideos?.length>0?
                  item.allVideos.map(card=>(<Videocard display={card}/>)):<p>Nothing added yet</p>
                }
                </Col>
              </Row>
            </div>
          )): <p>Nothing to display</p>
        }
        

        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        >
        <Modal.Header closeButton>
            <Modal.Title><i className="fa-solid fa-pencil" style={{color:'gold'}}></i>Add New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form action="" className='border border-secondary p-3 rounded'>

            <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Category Name</Form.Label>
              <Form.Control onChange={(e)=>setCategory(e.target.value)}  type="text" placeholder="Enter Category Name" />
            </Form.Group>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button onClick={handleAddCategory} variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>
        <ToastContainer theme="colored" closeOnClick draggable/>
      </>
  
  )
}

export default Category