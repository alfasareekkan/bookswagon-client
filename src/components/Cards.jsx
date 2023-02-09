import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card style={{ width: '10rem',height:"17rem" }}>
      <Card.Img variant="top" src="https://d2g9wbak88g7ch.cloudfront.net/productimages/images200/895/9781786330895.jpg" style={{ width: "8rem", height: "10rem", marginTop: "1rem", marginLeft: "1rem"}} />
      <Card.Body>
        <Card.Title >Card Title</Card.Title>
        <Card.Text style={{color:"red"}}>
          $599
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;