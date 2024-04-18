import React, { useState } from 'react' 
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
import Module from './Components/Module';
// import { Bootstrap } from 'react-bootstrap-icons';
import Hnext from './Hnext';
import Python from './Python';
import Module1 from './Module1';
import Csspdf from './Csspdf.jsx';
import Inlang from './Inlang';
import Quiz from './Quiz';
import App1 from './App1'
import Apppp from './Apppp'
import Footer from './Footer';
import Firstpage from "./Components/Firstpage.jsx"
import ResetPassword from './ResetPassword.jsx';
import Sidenav from './Components/Sidenav.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Htmlpdf from './Pdfs/Htmlpdf.jsx';
import Htmlppt from './Pdfs/Htmlppt.jsx';
import Cssppt from './Pdfs/Cssppt.jsx';
import Htmlvideo from './Pdfs/Htmlvideo.jsx';
import CssVideo from './Pdfs/CssVideo.jsx';
import FavouritePage from './FavouritePage.jsx';
import HtmlQuiz from './Pdfs/HtmlQuiz.jsx';
import Js from './Contents/Js.jsx';

export default function App(){

  return(
      <BrowserRouter>
 

  <Routes>
    <Route path="/" element={<Firstpage/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
   <Route path="/Signup" element={<Signup/>}></Route>
   <Route path="/Navbar" element={<Navbar/>}></Route>
   <Route path="/Dashboard" element={<Dashboard/>}></Route>
   <Route path="/Home" element={<Home/>}></Route>
   <Route path="/Html" element={<Html/>}></Route>
   <Route path="/Hnext" element={<Hnext/>}></Route>
   <Route path="/Python" element={<Python/>}></Route>
   <Route path="/Videosection" element={<Videosection/>}></Route>
   <Route path="/Courses" element={<Courses/>}></Route>
   <Route path="/Module" element={<Module/>}></Route>


   <Route path="/Module1" element={<Module1/>}></Route>
   <Route path="Firstpage" element={<Firstpage/>}></Route>
   <Route path="/Inlang" element={<Inlang/>}></Route>
   <Route path="/Quiz" element={<Quiz/>}></Route>
   <Route path="/App1" element={<App1/>}></Route>
   <Route path="/Apppp" element={<Apppp/>}></Route>
   {/* <Route path="/html.pdf" element={<html.pdf/>}></Route> */}
   <Route path="/Footer" element={<Footer/>}></Route>
   <Route path="/ResetPassword" element={<ResetPassword/>}></Route>
   <Route path="/Sidenav" element={<Sidenav/>}></Route>
   <Route path="/Sidebar" element={<Sidebar/>}></Route>
   <Route path="/Csspdf" element={<Csspdf/>}></Route>
   <Route path="/Htmlpdf" element={<Htmlpdf/>}></Route>
   <Route path="/Htmlppt" element={<Htmlppt/>}></Route>
   <Route path="/Cssppt" element={<Cssppt/>}></Route>
   <Route path="/Htmlvideo" element={<Htmlvideo/>}></Route>
   <Route path="/CssVideo" element={<CssVideo/>}></Route>
   <Route path="/FavouritePage" element={<FavouritePage/>}></Route>
   <Route path="/HtmlQuiz" element={<HtmlQuiz/>}></Route>
   <Route path="/Js" element={<Js/>}></Route>


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
