
import pimg from "../slider/b2.jpg";
import pimg1 from "../slider/bottle.png";
import pimg2 from "../slider/laptop.jpg";
import pimg3 from "../slider/cam.jpg";
import pimg4 from "../slider/en.jpg";
import pimg5 from "../slider/book.jpg";
import pimg6 from "../slider/tshirt.jpg";
import pimg7 from "../slider/watch.jpg";
import pimg8 from "../slider/losen.png";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Slider() {
  return (
    <>
   <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Office</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Marketing</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Promotion</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Display</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Stickers</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg4} style={{height: 250}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Books</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg5} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Cloths</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg6} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Watches</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg7} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

    <h2 style={{marginTop: 30, color: "#163eab " ,marginLeft:50 }}>Packages</h2>
    <Row xs={2} md={5} className="g-6" style={{marginTop: 20, borderRadius: '300px', marginRight:40, marginLeft: 40}}>
      {Array.from({ length: 5 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={pimg8} style={{height:200}} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
}


export default Slider;