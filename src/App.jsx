import React, { useState } from 'react' 
// import Card from 'react-bootstrap/Card';
// // import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { CardBody, Col, Row } from 'react-bootstrap';
// import style from "./Css/LMSUI.module.css"
// import Image from 'react-bootstrap/Image';
// import { ShimmerThumbnail } from "react-shimmer-effects";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';
import { Navbar } from 'react-bootstrap';
import Home from './Home';
import Html from './Html';
import Videosection from './Videosection';
import Courses from './Courses'
// import React from 'react';
// import { Bootstrap } from 'react-bootstrap-icons';
// import Dashboard from './Dashboard';
import Hnext from './Hnext';
import Python from './Python';
import Module1 from './Module1';
import Inlang from './Inlang';
import Quiz from './Quiz';
import App1 from './App1'
import Apppp from './Apppp'
// import Courses from './Courses'
export default function App(){



  return(
      <BrowserRouter>
 

  <Routes>
    <Route path="/" element={<Login/>}></Route>

   <Route path="/Signup" element={<Signup/>}></Route>
   <Route path="/Navbar" element={<Navbar/>}></Route>
   <Route path="/Dashboard" element={<Dashboard/>}></Route>
   <Route path="/Home" element={<Home/>}></Route>
   <Route path="/Html" element={<Html/>}></Route>
   <Route path="/Hnext" element={<Hnext/>}></Route>
   <Route path="/Python" element={<Python/>}></Route>
   <Route path="/Videosection" element={<Videosection/>}></Route>
   <Route path="/Courses" element={<Courses/>}></Route>
   <Route path="/Module1" element={<Module1/>}></Route>
   <Route path="/Inlang" element={<Inlang/>}></Route>
   <Route path="/Quiz" element={<Quiz/>}></Route>
   <Route path="/App1" element={<App1/>}></Route>
   <Route path="/Apppp" element={<Apppp/>}></Route>
  </Routes>
  </BrowserRouter>
 
  )
}





// export default function App() {
//   const[buttonClicked,setbuttonClicked]=useState(true)
//   return (
//   <>
//   <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<Login/>}></Route>

//    <Route path="/Signup" element={<Signup/>}></Route>
//   </Routes>
//   </BrowserRouter>
//   {buttonClicked?
//   <div className={style.root} >
      
   
//     <Card className={style.card}>
//       <CardBody>
//       <Row>
//       <Col >  
//       <Image  src="https://th.bing.com/th/id/OIP.5IKf451XJ0TiHnzqkt30TAHaHa?rs=1&pid=ImgDetMain " fluid />
    
// </Col>
// <Col>

// <Col>   
// <Row>

 
// <h4 >Sign in to Your Account </h4>
// <Form.Label >Email ID</Form.Label>
//           <Form.Control
         
//             type="text"
//             placeholder="enter your email"/>


//           <Form.Label >Password</Form.Label>
//            <Form.Control
            
//             type="Password"
//             placeholder="password"
            
//           />
     
//       <Button onClick={()=>{
//         setbuttonClicked(false)
//       }} variant="primary">Login</Button>{' '}
      
//       Don't have an account,Click Here
      
//       </Row>
      
// </Col>

// </Col>
// </Row>
// </CardBody>
// </Card>
    
   
    
//     </div>
// : <ShimmerThumbnail height={250} rounded /> }
    
//     </>
//   )
// }
