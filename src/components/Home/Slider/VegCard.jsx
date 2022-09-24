import React from 'react'
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,CardImg} from 'react-bootstrap';

const VegCard = props =>{
    let {imgSrc, price, title} = props.data;
    return (
     <Card className='h-100 p-0 overflow-hidden shadow img-fluid'>
        <div className='overflow-hidden rounded p-0 bg-light'>
        <CardImg src={imgSrc} width="100%" height="150vw" object-fit= "cover"/> 
         </div>
        <Card.Body className="text-center ">
            <Card.Title className="display-10">
                {price}
            </Card.Title>
            <Card.Title>{title}</Card.Title>
        </Card.Body>
        <Button className='w-100 rounded-0' variant="success">Add To Cart</Button>
       
     </Card>   
   
    );
  }
export default VegCard;