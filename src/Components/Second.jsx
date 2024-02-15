import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function First(props) {
  const {image,title,text,update}=props;
  return (
    <div>
      <Card className="bg-dark text-white">
      <Card.Img src={image} />
      <Card.ImgOverlay>
        <Card.Title><h6>{title}</h6></Card.Title>
        <Card.Text>
          <p>{text}</p>
        </Card.Text>
        <Card.Text>{update}</Card.Text>
        <Button variant="outline-light">Read More</Button>
      </Card.ImgOverlay>
    </Card>
    
    </div>
  )
}