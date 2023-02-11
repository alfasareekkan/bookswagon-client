import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards({product}) {
  return (
    <Card style={{ width: '10rem',height:"17rem", }}>
      <Card.Img variant="top" src={product.image} style={{ width: "8rem", height: "10rem", marginTop: "1rem", marginLeft: "1rem"}} />
      <Card.Body>
        <Card.Title style={{fontSize:"0.8rem",}} >{product.title}</Card.Title>
        <Card.Text style={{color:"red"}}>
          ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cards;