import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { Col, Row } from 'react-bootstrap'
import { getAllVideos } from '../services/allAPI'

function View({uploadVideoStatus}) {
  const [deleteVideoStatus,setDeleteVideoStatus]=useState(false)

  const [allVideo,setAllVideo] = useState([])

  const getAllUploadedVideos = async()=>{
    const response = await getAllVideos()
    const {data} = response
    //console.log(data);
    setAllVideo(data)
    
  }
  console.log(allVideo);
  useEffect(()=>{
    getAllUploadedVideos()
    setDeleteVideoStatus(false)
  },[uploadVideoStatus,deleteVideoStatus])
  return (
    <div>
        <h5>All Videos</h5>
        <Row>
          {allVideo.length>0?
          allVideo?.map((video)=>(<Col>
            <Videocard display={video} setDeleteVideoStatus={setDeleteVideoStatus}/>
          </Col>))
                :
                <p>Add videos to display</p>
          }
        </Row>
    </div>
  )
}

export default View