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




/* 
<div data-aos="flip-left">
      <Row className={style.space}>
        <Col>   
      <Card.Img className={style.pic} variant="top" src="https://3.bp.blogspot.com/-6wk0RRXmFDs/XKgMGx0fCdI/AAAAAAAABNk/wa0NjdfRSoI4fIrjLLgDvqS9F_lix13gACEwYBhgL/s1600/IMG_20190406_074620.jpg"/> 
      <div className={style.up}   >  <a href="/Html"> <svg onClick  xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-html" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zm-9.736 7.35v3.999h-.791v-1.714H1.79v1.714H1V11.85h.791v1.626h1.682V11.85h.79Zm2.251.662v3.337h-.794v-3.337H4.588v-.662h3.064v.662zm2.176 3.337v-2.66h.038l.952 2.159h.516l.946-2.16h.038v2.661h.715V11.85h-.8l-1.14 2.596H9.93L8.79 11.85h-.805v3.999zm4.71-.674h1.696v.674H12.61V11.85h.79v3.325Z"/>
</svg> </a>  HTML Courses
</div>

    <Rate/> 
    

    </Col>

    <Col>    
    
      <Card.Img className={style.pic} variant="top" src="https://th.bing.com/th/id/R.4b48cd345e409058773d7e9a12ff181b?rik=T9Nw%2f2MyqHD48w&riu=http%3a%2f%2fnepalijob.com%2fwp-content%2fuploads%2f2019%2f01%2fjavascript-800x445.jpg&ehk=ChNmBox9ebRYPvpUIsX3DxGcsRFLqZdoxVMLCfRwQcY%3d&risl=&pid=ImgRaw&r=0" />
      <div className={style.up} > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-js" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H8v-1h4a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.186 15.29a1.2 1.2 0 0 1-.111-.449h.765a.58.58 0 0 0 .255.384q.105.073.249.114.143.041.319.041.246 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.151-.12-.462-.193l-.619-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.528-.422.336-.15.776-.149.457 0 .78.152.324.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.247-.181.9.9 0 0 0-.369-.068q-.325 0-.513.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .405.175l.62.143q.327.075.566.211.24.136.375.358t.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375m-3.104-.033A1.3 1.3 0 0 1 0 14.791h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466v-2.745h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.569-.094 1.15 1.15 0 0 1-.407-.266 1.1 1.1 0 0 1-.243-.39"/>
</svg>  Javascript Courses 
     </div>
     <Rate/> 
     
   
    </Col>

    <Col>    
      <Card.Img className={style.pic} variant="top" src="https://3.bp.blogspot.com/-x7uuv8aIHpw/WOkAiSmcj7I/AAAAAAAAAoA/nznnCQvNsKgWVNefLnnbUMyAUEsz6LugACLcB/s1600/gggg.jpg" />
      <div className={style.up}   > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-css" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.397 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zM6.78 15.29a1.2 1.2 0 0 1-.111-.449h.764a.58.58 0 0 0 .255.384q.106.073.25.114.142.041.319.041.245 0 .413-.07a.56.56 0 0 0 .255-.193.5.5 0 0 0 .085-.29.39.39 0 0 0-.153-.326q-.152-.12-.463-.193l-.618-.143a1.7 1.7 0 0 1-.539-.214 1 1 0 0 1-.351-.367 1.1 1.1 0 0 1-.123-.524q0-.366.19-.639.19-.272.527-.422t.777-.149q.456 0 .779.152.326.153.5.41.18.255.2.566h-.75a.56.56 0 0 0-.12-.258.6.6 0 0 0-.246-.181.9.9 0 0 0-.37-.068q-.324 0-.512.152a.47.47 0 0 0-.184.384q0 .18.143.3a1 1 0 0 0 .404.175l.621.143q.326.075.566.211t.375.358.135.56q0 .37-.188.656a1.2 1.2 0 0 1-.539.439q-.351.158-.858.158-.381 0-.665-.09a1.4 1.4 0 0 1-.478-.252 1.1 1.1 0 0 1-.29-.375"/>
</svg> CSS Courses 
     </div>
     <Rate/> 
        
    </Col>


    </Row>


    <Row className={style.space}>

        <Col>    
      <Card.Img className={style.pic} variant="top" src="https://th.bing.com/th/id/OIP.JlZ-o9MXJcMNPGpeIPZjvAHaEK?rs=1&pid=ImgDetMain" />
      <div className={style.up}   > <a href="/Python"> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-py" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.158.299-.464.474a1.45 1.45 0 0 1-.732.173H.79v1.342H0zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.513-.182H.788v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24m2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855z"/>
</svg> </a> Python Courses
     </div>
     <Rate/> 
      
    </Col>

    <Col>    
      <Card.Img className={style.pic} variant="top" src="https://wallpapercave.com/wp/wp1958117.jpg" />
      <div className={style.up}   > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-php" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.182.185.522m4.48 2.666V11.85h-.79v1.626H4.153V11.85h-.79v3.999h.79v-1.714h1.682v1.714zm.703-3.999h1.6q.433 0 .732.179.3.175.46.477.158.302.158.677t-.161.677q-.159.299-.463.474a1.45 1.45 0 0 1-.733.173H8.12v1.342h-.791zm2.06 1.714a.8.8 0 0 0 .084-.381q0-.34-.184-.521-.184-.182-.513-.182h-.66v1.406h.66a.8.8 0 0 0 .375-.082.57.57 0 0 0 .237-.24Z"/>
</svg> PHP Courses 
     </div>
     <Rate/> 
   
    </Col>

    <Col>    
      <Card.Img className={style.pic}  variant="top" src="https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/java-logo_0.jpg?itok=wfdR6eAu" />
      <div className={style.up}   > <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-filetype-java" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M14 4.5V11h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.521 15.175a1.3 1.3 0 0 1-.082-.466h.765a.6.6 0 0 0 .073.27.5.5 0 0 0 .454.246q.285 0 .422-.164.138-.165.138-.466V11.85h.79v2.725q0 .66-.357 1.005-.354.345-.984.345a1.6 1.6 0 0 1-.568-.094 1.1 1.1 0 0 1-.408-.266 1.1 1.1 0 0 1-.243-.39m3.972-.354-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617zm2.342 1.618h.952l1.327-3.999h-.878l-.888 3.138h-.038L8.59 11.85h-.917zm3.087-1.028-.314 1.028h-.8l1.342-3.999h.926l1.336 3.999h-.84l-.314-1.028zm1.178-.59-.49-1.616h-.035l-.49 1.617z"/>
</svg> Java Courses 
     </div>
     <Rate/> 
    </Col>
    </Row>
    </div> */

// https://fresheropenings.com/wp-content/uploads/2020/08/170427-637251494437967118-16x9html.jpg


// https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2017/10/What-Is-JavaScript-Featured.jpg
