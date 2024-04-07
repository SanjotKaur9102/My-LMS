import React from 'react'
import style from "./Css/LMSUI.module.css"
import { Container } from 'react-bootstrap';


export default function Videosection() {
  return (<>  
   <div className={style.vback}>   <Container >
<div className='text-warning bg-dark mt-5 fs-1'>1. Video for Html</div>

<div className="ratio ratio-21x9">
  <iframe src="https://www.youtube.com/embed/mJgBOIoGihA?si=MiiV28QHY61dertX"  title="YouTube video" ></iframe>
</div>
<br></br>
<br></br>
<div className='text-white-50 bg-dark mt-5 pt-1 fs-1'><strong>2. Video for Javascript</strong></div>

<div className="ratio ratio-21x9">
  <iframe src="https://www.youtube.com/embed/jS4aFq5-91M?si=np56_wSgJnr7cLqN"  title="YouTube video" allowfullscreen></iframe>
</div>
<br></br>
<br></br>
<div className='text-danger mt-5 pt-1 fs-1'><b>3. Video for CSS</b></div>

<div className="ratio ratio-21x9">
  <iframe src="https://www.youtube.com/embed/K1naz9wBwKU?si=zr58EaWNmJGxSvxe"  title="YouTube video" allowfullscreen></iframe>
</div>
<br></br>
<br></br>
<div className='text-success mt-5  fs-1'><b>4. Video for Python</b></div>

<div className="ratio ratio-21x9">
  <iframe src="https://www.youtube.com/embed/_uQrJ0TkZlc?si=9uWP8hMJ5iwdXq26"  title="YouTube video" allowfullscreen></iframe>
</div>


<br></br>
<br></br>
<a class="btn btn-danger" href="/Dashboard" role="button">Previous</a>


</Container>
  
</div>



</>
 
  )
}
