import React from "react";
import style from "./Css/LMSUI.module.css"
const Footer = () => {
  return (
  <>
  
  <div class="card text-center ">
  <div class="card-header">
    <div className={style.contactpic}> <b>Need to Get in touch with us ?</b>
    <img src="https://media.istockphoto.com/id/1497793104/photo/contact-us-concept-male-hand-draws-a-line-under-the-word-contact-us-on-yellow-background.jpg?s=612x612&w=0&k=20&c=xBTPhLTvrMnlCXJ_VNfa4FFBCPXJ75hVVbgyYZIT1B0=" height="70px" width="150px"></img>
    {/* <h1>Contact US</h1> */} 
    </div>
  </div>
  <div class="card-body">
    <h5 class="card-title">Learning Management System</h5>
    {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a> */}
  
  <div className='col' style={{display:"flex",justifyContent:"space-between"}}>
<a class="onclick icon-link icon-link-hover link-success "  href="https://github.com/SanjotKaur9102">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="light green"  viewBox="0 0 16 16" >
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>

 </svg>
{/* Connect using github */}

</a>
<a class="onclick icon-link icon-link-hover link-success "  href="https://www.linkedin.com/in/sanjot-kaur-aba6902a8/">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="navy"  viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
 {/* Connect using Linkedin */}
</a>

<a class="onclick icon-link icon-link-hover link-success "  href="http://localhost:5174/">
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="grey" viewBox="0 0 16 16">
  <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z"/>
</svg> 
{/* Connect using My Portfolio */}
</a>

</div>
  
  </div>
  <div class="p-3 mb-2 bg-black text-white ">
  {/* <div class="card-footer text-body-secondary"> 
  Made  with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg> by Sanjot using REACTJS.
  </div> */}

  Made  with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg> by Sanjot using REACTJS.
  </div>
</div>

  </> 
  );
};

export default Footer;


