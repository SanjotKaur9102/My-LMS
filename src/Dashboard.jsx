


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
import Signup from './Signup';
import { Form } from 'react-bootstrap';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Footer from './Footer';
import Sidenav from './Components/Sidenav';
// import Carousel from 'bootstrap/Carousel';
import Module1 from './Module1';
import Js from './Contents/Js';
// import button from 'bootstrap';

// import { faHeart } from "react-icons/fa";
import FavouritePage from "./FavouritePage"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
 
export default function Dashboard() {
  
const [searchQuery,setSearchQuery]= useState("")
const [favourites, setFavourites] = useState([]);


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
    link:"/Js"
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
    name:"Web Technology",
    image:"https://th.bing.com/th/id/R.2b50457becf7937cbac9c890bbfe6363?rik=LszTn1t%2fq8CpKw&riu=http%3a%2f%2fwww.netsolvis.com%2fimages%2fweb%2ftechnologies-web.jpg&ehk=%2fjjLnDPBA0FgQQqVvlxQH0OSZqy%2bcrpmTQsMdfMjsSM%3d&risl=&pid=ImgRaw&r=0",
    link:"/Html"
    },
  
{
  id:7,
  name:"Java Courses",
  image:"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo_0.jpg?itok=wfdR6eAu",
  link:"/Html"
  },
]


const toggleFavourite = (courseId) => {
  if (favourites.includes(courseId)) {
    setFavourites(favourites.filter(id => id !== courseId));
  } else {
    setFavourites([...favourites, courseId]);
  }
};

const isFavourite = (courseId) => {
  return favourites.includes(courseId);
};



const filterCourses=(courseName)=>{
  return courseName.toLowerCase().includes(searchQuery.toLowerCase());
}

let coursesFound = false;

  return (
    
  <>
<div data-aos="flip-right">

          
          <Sidenav/>
         

          <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900" class="d-block w-100" alt="..."
       width="1530"
       height="350"
       />
       <div className={style.centered}><strong>Easier Access To Studying Material</strong></div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900" class="d-block w-100" alt="..."  
      width="1530"
   height="350"
   />
   <div className={style.centered}><strong>ENRCICH YOUR PROGRAMMING SKILLS</strong></div>
    </div>
    <div class="carousel-item">
      <img src="https://img.freepik.com/premium-vector/modern-technology-blue-color_132230-201.jpg?w=900" class="d-block w-100" alt="..."  
      width="1530"
   height="350"
   />
   <div className={style.centered}><strong><i>Improves Presentation Skills</i></strong></div>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>




<Container>
 
  <Row className={style.searchpad}>            {/* <Row className="justify-content-md-center"> */}
              <Col xs={12} md={6} >
                <Form.Control
                  type="text"
                  placeholder="Search courses..."
                  
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ marginBottom: "10px", marginTop:"15px" }}
                />
              </Col>
            </Row>
           
          </Container>


<center>
<h1 className='text-warning mt-1 mb-5'>
  <i><u><strong>EXPLORE OUR COURSES</strong></u></i></h1>
</center>
  <Row >
    {courses.map((course)=>{
      if(filterCourses(course.name)){
        return(
          <Col key={course.id} style={{marginBottom:"20px" , marginLeft:"25px"}}>
            <Card style={{width:'18rem', border:'none'}}>
              {/* <Link to={course.link}> */}
                <Card.Img className={style.pic}  style={{height:"16rem"}} variant='top' src={course.image}/>
                
                <Card.Body>
                    <Link to={course.link}>
                <h6>{course.name}</h6>
                </Link>
                
                <div onClick={() => toggleFavourite(course.id)} 
                      style={{ cursor: "pointer", position: "absolute", top: "10px", right: "10px" }}>
                        <FontAwesomeIcon icon={faHeart} size="2x" color={isFavourite(course.id) ? "red" : "white"} />
                      </div>

                <Rate/>

                </Card.Body>
              
            </Card>
          </Col>

        )
      }
      return null;
    })}

{/* 
{!coursesFound && (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <h6>Card not found</h6>
                  </Card.Body>
                </Card>
              </Col>
            )} */}
  </Row>

  {favourites.length > 0 && <FavouritePage courses={courses} favourites={favourites} />}
{/* <Footer/> */}
</div>

       </>


  )
}



