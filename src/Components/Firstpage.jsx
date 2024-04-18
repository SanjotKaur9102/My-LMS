import React from 'react'
import Footer from '../Footer'
import style from "../Css/LMSUI.module.css"
import Card from "react-bootstrap/Card";
import { Table, Row, Col, Container } from "react-bootstrap";
// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import LMSIcon from '../icons/lms-icon.svg';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from 'react-router-dom';
import Signup from '../Signup';
import Login from '../Login';

export default function Firstpage() {
  return (<>
   
   <div data-aos="zoom-in-down">

   
   <Navbar collapseOnSelect expand="lg"
                className="bg-warning">
                            
                    <Navbar.Brand href="#home">
                       <div className={style.licon}>
                        <img
                            src="https://th.bing.com/th?id=OIP.PWIvO4DcCdHCkFrrl8bkswAAAA&w=212&h=212&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
                            width="90"
                            height="80"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    
      {/* <h3> Welcome to My Learning Platform</h3>    add in motion */}
                    <Navbar.Toggle 
                        aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                                              <Nav className="me-auto">
                           
                            <Nav.Link>

                            <div className={style.lbutton}>
                            <Link to="/Login">   <button class="btn btn-info me-md-2">LOGIN</button>
                            </Link> </div>
                            </Nav.Link>

                            
                            <Nav.Link>

                            <Link to="/Signup">
                               <button class="btn btn-info me-md-2">Signup</button>
                               </Link>
                            </Nav.Link>
                            
                        </Nav>
                        
                    </Navbar.Collapse>
               
            </Navbar>



        <div className={style.ftext}>
            <p>
<b>
A Learning Management System LMS is a platform that enables online education and eLearning by providing a framework to create, manage, and deliver learning content. 

LMS solutions reduce costs associated with traditional classroom training, printed materials, and travel expenses.

LMS platforms also allow for easy integration of multimedia elements.
</b>  </p>  <br/>
<strong>
The best Learning Management System gives you the ability to keep track of learner progress and ensure that they are meeting their performance milestones. 
<hr/>
Instead of having your eLearning content spread out over different hard drives and devices, you can store all of your eLearning materials in one location.
<center>
    <br/>
A Learning Management System can even reduce online training times, thanks to the fact that it gives online learners only the information they need in a direct and organized manner. Instead of having to sit through a lengthy half-hour online training course, online learners can simply click on the online modules they need and absorb the knowledge in a fraction of the time.
</center> </strong>
</div>



    <div >
    <div className="mt-3">
    {/* <div className={style.centered}>  <h1> <strong><i>Start Learning</i></strong></h1> </div> */}

    
</div>

<div className={style.fpic}>    <img src='https://synergy-learning.com/wp-content/uploads/2020/12/7-Benefits-of-using-a-Learning-Management-System-LMS-1200x600.jpg' width={800}>
    </img>
    
    </div>

   



   <br/><br/><br/>
    <Footer/> 
    
    </div>
    </div>
    </>
  )
}
