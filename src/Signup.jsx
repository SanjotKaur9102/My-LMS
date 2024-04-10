import React, { useState } from 'react' 
    import Card from 'react-bootstrap/Card';
    // import Table from 'react-bootstrap/Table';
    import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { CardBody, Col, Row } from 'react-bootstrap';
    import style from "./Css/LMSUI.module.css"
    // import Image from 'react-bootstrap/Image';
    import InputGroup from 'react-bootstrap/InputGroup';
    import { ShimmerThumbnail } from "react-shimmer-effects";
    import {BrowserRouter,Routes,Route} from "react-router-dom"
    
import Dashboard from './Dashboard';
//import Login from './Login';
    // import App from './App';
export default function Login() {
    const[buttonClicked,setbuttonClicked]=useState(true)



    
            return (
      <>
      <div data-aos="fade-left">
          {buttonClicked? 
      <div className={style.root} >
          
       
        <Card className={style.card}>
          <CardBody>
          <Row>
          {/* <Col >  
          <Image  src="https://th.bing.com/th/id/OIP.5IKf451XJ0TiHnzqkt30TAHaHa?rs=1&pid=ImgDetMain " fluid />
        
    </Col> */}
    <Col>
    
    <Col>   
    <Row>
    
     
    <h4 >Sign up for new Account </h4>


    <Form.Label>First name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Enter text"/>

            <Form.Label>Last name:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"/>

                <Row className='px-3'>
            <Form.Label>City:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter city"
             
            />
     
          
                 </Row>
                 <Form.Label>Contact:</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Contact"
             
            />
     
     <Form.Label>Password:</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Enter strong password"/>

<Form.Label>Confirm password:</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Re-enter the password"/>







    {/* <Form.Label >Email ID</Form.Label>
              <Form.Control
             
                type="text"
                placeholder="enter your email"/>
    
    
              <Form.Label >Password</Form.Label>
               <Form.Control
                
                type="Password"
                placeholder="password"
                
              /> */}
         
          <Button onClick={()=>{
            setbuttonClicked(false)
          }} variant="primary">Submit</Button>{' '}
          
                    
          </Row>
          
    </Col>
    
    </Col>
    </Row>
    </CardBody>
    </Card>
        </div>
    : <ShimmerThumbnail height={250} rounded /> }
        </div>
        </>
      )
    }
    


