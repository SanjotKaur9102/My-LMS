
import React, { useState } from 'react' 
    import Card from 'react-bootstrap/Card';
    // import Table from 'react-bootstrap/Table';
    import Form from 'react-bootstrap/Form';
    import Button from 'react-bootstrap/Button';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import { CardBody, Col, Row } from 'react-bootstrap';
    import style from "./Css/LMSUI.module.css"
    import Image from 'react-bootstrap/Image';
    import { ShimmerThumbnail } from "react-shimmer-effects";
    import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
    import Signup from './Signup';
    
    
import Dashboard from './Dashboard';
    Dashboard
    //import App from './App';
export default function Login() {
    const[buttonClicked,setbuttonClicked]=useState(true)


    
            return (
      <>
      {buttonClicked?
      <div className={style.root} >
          
       
        <Card className={style.card}>
          <CardBody>
          <Row>
          <Col >  
          
                
             
          <Image  src="https://th.bing.com/th/id/OIP.5IKf451XJ0TiHnzqkt30TAHaHa?rs=1&pid=ImgDetMain " fluid/>
        
    </Col>
    <Col>
    
    <Col>   
    <Row>
    
     
    <h4 > Login Your Account </h4>
    <Form.Label >Email ID</Form.Label>
              <Form.Control
             
                type="text"
                placeholder="enter your email"/>
    
    
              <Form.Label >Password</Form.Label>
               <Form.Control
                
                type="Password"
                placeholder="password"
                
              />
         <Link to="/Dashboard">        <Button variant="primary" onClick={()=>{
            setTimeout(()=>{
                Navigate,("/login")
            },2000)
            setbuttonClicked(false)
          }}>Login</Button>{' '}
          </Link>
  
          <Link to="/Signup">
          Don't have an account,Click Here
          </Link>
          </Row>
          
    </Col>
    
    </Col>
    </Row>
    </CardBody>
    </Card>
        </div>
    : <ShimmerThumbnail height={250} rounded /> }
        
        </>
      )
    }
    


