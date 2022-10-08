import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


import React from 'react'

export default function review() {
  return (
    <div>
  <Row xs={4} md={5} className="g-8" style={{marginTop: 50 , marginRight: 50, marginLeft: 70}}>
  {Array.from({ length: 5 }).map((_, idx) => (
    <Col>
      <Card style={{ display: "flex", justifyContent: "space-between"}}>
        <Card.Body>
          <div className="star-rating">
      {[...Array(5)].map((star) => {        
        return (         
          <span className="star">&#9733;</span> 
        //   <span>16 hours</span>       
        );
      })}
    </div>
    <span style={{alignitem: "right"}}>16 hours</span>
         <Card.Title style={{color: "#163eab", marginTop:5}}>Excellent Service</Card.Title>
          <Card.Text>
            This is a longer card with supporting text 
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  ))}
</Row>
    </div>
  )
}


