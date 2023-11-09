import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <div>

        <div className='container  mt-5 mb-5 d-flex align-items-center justify-content-between
          w-100'>
          <div lg={5}>
            <h3 className='mb-5'>Welcome to <span style={{color:'gold'}}>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum totam dolore optio quis obcaecati sit quia voluptatem ut officia quidem, labore pariatur incidunt tempora beatae est, distinctio, cum voluptates dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ea qui magni possimus explicabo laboriosam commodi nemo, repellat quod? Voluptatum eos rerum laudantium? Perferendis officia consequuntur inventore, rem error amet!
            </p>
            <button onClick={()=>{navigateByUrl('/home')}} className='btn btn-warning'>Get Started <i class="fa-solid fa-arrow-right" style={{color: "#ffffff"}}></i></button>
          </div>
          <Col lg={2}></Col>
          <div lg={5}>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{height:'500px',width:'500px'}}/>
          </div>
        </div>
        <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center w-100 flex-column">
          <h2>Features</h2>
          <div className="card-container">
            <Row className='mb-5'>
              <Col>
                <Card className='p-4' style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif"/>
                  <Card.Body>
                    <h4>Managing Videos</h4>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card className='p-4' style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
                  <Card.Body>
                    <h4>Catogarized Video</h4>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
              <Col>
              <Card className='p-4' style={{ width: '22rem' }}>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
                  <Card.Body>
                    <h4>Watch History</h4>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </div>
        </div>

        <div className='mt-5 mb-5 d-flex align-items-center justify-content-center w-100 flex-column'>
            <div className="container border border-secondary rounded p-3">
              <Row>
                <Col lg={6}>
                <div className='p-2'>
                  <h3 className='text-warning'>Simple Fast and Powerful</h3>
                  <div className='p-3'>
                    <p style={{textAlign:'justify'}}><span className='fs-4 fw-bolder'>Play Everything </span>: PlayLorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis! Eaque tempora unde libero repellat dicta voluptate at repellendus, quos fuga, expedita minus, saepe veniam. Veritatis obcaecati culpa rerum dolore!</p>
                    <p style={{textAlign:'justify'}}><span className='fs-4 fw-bolder'>Play Everything </span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis! Eaque tempora unde libero repellat dicta voluptate at repellendus, quos fuga, expedita minus, saepe veniam. Veritatis obcaecati culpa rerum dolore!</p>
                    <p style={{textAlign:'justify'}}><span className='fs-4 fw-bolder'>Play Everything </span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, nobis! Eaque tempora unde libero repellat dicta voluptate at repellendus, quos fuga, expedita minus, saepe veniam. Veritatis obcaecati culpa rerum dolore!</p>
                  </div>
                </div>
                </Col>
                <Col lg={6}>
                <iframe width='100%' height={"500px"} src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Col>
              </Row>
            </div>
        </div>
    </div>
  )
}

export default LandingPage