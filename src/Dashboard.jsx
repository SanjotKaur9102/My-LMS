import Card from 'react-bootstrap/Card';
 import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Navbar, Row,Button, CardBody} from 'react-bootstrap';
import image from 'react-bootstrap/Image';
import style from "./Css/LMSUI.module.css"
// import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'bootstrap';
import { Box} from 'react-bootstrap-icons';
import Rate from './Rate';
import Style from "./Css/LMSUI.module.css"
import { Link } from 'react-router-dom';

import { Form } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';

// import button from 'bootstrap';

export default function Dashboard() {
  
const [searchQuery,setSearchQuery]= useState("")

const courses=[
  {
    id:1,
    name:"HTML Courses",
    image:"https://3.bp.blogspot.com/-5VX_0KZ_8Rw/XMBACUy4WzI/AAAAAAAAAzE/ILjjxv-fpi0kJ2Zobhs3DNJHWOeWI_B_ACLcBGAs/s1600/sta-je-html.jpg",
    link:"/Html"

  },
  
  {
    id:2,
    name:"Javascript Courses",
    image:"https://th.bing.com/th/id/R.4b48cd345e409058773d7e9a12ff181b?rik=T9Nw%2f2MyqHD48w&riu=http%3a%2f%2fnepalijob.com%2fwp-content%2fuploads%2f2019%2f01%2fjavascript-800x445.jpg&ehk=ChNmBox9ebRYPvpUIsX3DxGcsRFLqZdoxVMLCfRwQcY%3d&risl=&pid=ImgRaw&r=0",
    link:"/Html"
  },
 
{
  id:3,
  name:"CSS Courses",
  image:"https://th.bing.com/th/id/R.15474280ec4fe8cd198348a9038e17fd?rik=u0FmhA8wVL0uDw&riu=http%3a%2f%2fcdn.thinglink.me%2fapi%2fimage%2f1377135482940424195%2f1024%2f10%2fscaletowidth%2f0%2f0%2f1%2f1%2ffalse%2ftrue%3fwait%3dtrue&ehk=8Cx%2fWz%2b5fQ%2bhfWypOsymyPrlJBqlJ8HnV%2bRZ6Gg4dEA%3d&risl=&pid=ImgRaw&r=0",
  link:"/Html"

},

{
id:4,
name:"Python Courses",
image:"https://th.bing.com/th/id/OIP.JlZ-o9MXJcMNPGpeIPZjvAHaEK?rs=1&pid=ImgDetMain",
link:"/Python"
},


{
  id:5,
  name:"PHP Courses",
  image:"https://wallpapercave.com/wp/wp1958117.jpg",
  link:"/Html"
  },

  
{
  id:6,
  name:"Java Courses",
  image:"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo_0.jpg?itok=wfdR6eAu",
  link:"/Html"
  },
]

const filterCourses=(courseName)=>{
  return courseName.toLowerCase().includes(searchQuery.toLowerCase());
}

  return (
    
  <>


<div className={style.navbar}>
 <Navbar bg="white" data-bs-theme="white">


          <Navbar.Brand href="#home">
          <img
              src="https://st4.depositphotos.com/2547605/41498/v/450/depositphotos_414980524-stock-illustration-lms-learning-management-system-acronym.jpg"
              width="130"
              height="100"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
</Navbar.Brand>
          <Nav >
            
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Courses">Courses</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <Nav.Link href="#More">More</Nav.Link>


            {/* <div className='search-box'>
              <input type='text' placeholder='Search'/>
              <button class="btn btn-outline-success" type="submit">Search<svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="white" class="bi bi-search" viewBox="-4 1 20 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
</button> 
            </div> */}

            {/* <img src=''/>  */}

            {/* <div className={style.searchbutton}>

            <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
     

            </div> */}

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    
  </button>
  <ul class="dropdown-menu">
    <li><button class="dropdown-item" type="button">Favourite courses</button></li>
    <li><button class="dropdown-item" type="button">Most rated</button></li>
    <li><button class="dropdown-item" type="button"><a href="/Videosection">Video Section</a></button></li>
  </ul>
</div>

{/* searchbox+icon */}

{/* <div >
  <Row className={Style.search-Button}>
    <Col>
<input type='text'  placeholder='Type here..'></input>
<button> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" fill="white" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
</button>
</Col>
</Row>
</div> */}

                     </Nav>
        
      </Navbar>
      </div>
      

   {/* <center>
    
  <h1 >DashBoard</h1>
  </center> */}


<Container>
 
  <Row className={style.searchpad}>            {/* <Row className="justify-content-md-center"> */}
              <Col xs={12} md={6} >
                <Form.Control
                  type="text"
                  placeholder="Search courses..."
                  
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ marginBottom: "10px" }}
                />
              </Col>
            </Row>
           
          </Container>

         
    <Carousel centerMode infiniteLoop centerSlidePercentage={90}>
    {/* <div className='row'> */}
<div className={style.upimg}>
   
  <img src='https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900'
   width="1530"
   height="350"
  />
   <div className={style.centered}><strong>Easier Access To Studying Material</strong></div>
  {/* </img> */}
 
 
</div>

{/* <div className={style.upimg}> */}
<div>
  <img src='https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900'
   width="1530"
   height="350"
  />
  <div className={style.centered}><strong>ENRCICH YOUR PROGRAMMING SKILLS</strong></div>
  {/* </img> */}
  </div>

<div>
  <img src='https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900'
   width="1530"
   height="350"
  
  />
{/* 
<img src='https://th.bing.com/th/id/OIP.-7mWMV1pNkEvAW91dMpNKQHaEo?w=308&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7'
   width="1530"
   height="350"
   className={style.overlay-image}
  /> */}

  <div className={style.centered}><strong><i>Improves Presentation Skills</i></strong></div>
  {/* </img> */}
  </div>
{/* </div> */}

</Carousel>
{/* </div> */}


<center>
<h1 className='text-warning mt-1 mb-5'>
  <i><u><strong>EXPLORE OUR COURSES</strong></u></i></h1>
</center>
  <Row >
    {courses.map((course)=>{
      if(filterCourses(course.name)){
        return(
          <Col key={course.id} style={{marginBottom:"20px"}}>
            <Card style={{width:'18rem', border:'none'}}>
              {/* <Link to={course.link}> */}
                <Card.Img className={style.pic}  style={{height:"16rem"}} variant='top' src={course.image}/>
                
                <Card.Body>
                    <Link to={course.link}>
                <h6>{course.name}</h6>
                </Link>
                <Rate/>
                </Card.Body>
              
            </Card>
          </Col>

        )
      }
      return null;
    })}
  </Row>
{/* <Footer/> */}
       </>


  )
}



