import React from 'react'
// import { Bootstrap } from 'react-bootstrap-icons'
import style from "./Css/LMSUI.module.css"
import Table from 'react-bootstrap/Table';
import Dashboard from './Dashboard';
export default function Html() {
  return (
    <>   
      <center> 
   <h1> HTML Introduction</h1> 
</center>
{/* <div data-aos="fade-left"> */}
<div className={style.up}>
  
HTML is the standard markup language for creating Web pages.

What is HTML?
HTML stands for Hyper Text Markup Language
HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
A Simple HTML Document

<hr></hr>
<center>
  <font color="brown">
<h3> <u> <i> What is an HTML Element?</i></u></h3></font>
</center>
An HTML element is defined by a start tag, some content, and an end tag:



<div className={style.down}>
<center>
<h3>HTML History</h3>
</center>
</div>




<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>S No.</th>
          <th>Year</th>
          <th>Version</th>
          </tr>

 <tr>
          <th>1</th>
          <th>1989</th>
          <th>Tim Berners-Lee invented www</th>
          </tr>

          <tr>
          <th>2</th>
          <th>1991</th>
          <th>Tim Berners-Lee invented HTML</th>
          </tr>

          <tr>
          <th>3</th>
          <th>1993</th>
          <th>Dave Raggett drafted HTML+</th>
          </tr>


          <tr>
          <th>4</th>
          <th>1995</th>
          <th>HTML Working Group defined HTML 2.0</th>
          </tr>

          <tr>
          <th>5</th>
          <th>1997</th>
          <th>W3C Recommendation: HTML 3.2</th>
          </tr>

          <tr>
          <th>6</th>
          <th>1999</th>
          <th>W3C Recommendation: HTML 4.01</th>
          </tr>

          <tr>
          <th>7</th>
          <th>2000</th>
          <th>W3C Recommendation: XHTML 1.0</th>
          </tr>


          <tr>
          <th>8</th>
          <th>2008</th>
          <th>WHATWG HTML5 First Public Draft</th>
          </tr>


          <tr>
          <th>9</th>
          <th>2012</th>
          <th>WHATWG HTML5 Living Standard</th>
          </tr>



          <tr>
          <th>10</th>
          <th>2014</th>
          <th>W3C Recommendation: HTML5</th>
          </tr>


          <tr>
          <th>11</th>
          <th>2016</th>
          <th>W3C Candidate Recommendation: HTML 5.1</th>
          </tr>


          <tr>
          <th>12</th>
          <th>2017</th>
          <th>W3C Recommendation: HTML5.1 2nd Edition</th>
          </tr>

          <tr>
          <th>13</th>
          <th>Latest</th>
          <th>HTML5 standard</th>
          </tr>


          </thead>
    </Table>



<center>
   <b> How to View HTML Source</b>
   
   <br></br>
   </center>
   
Have you ever seen a Web page and wondered "Hey! How did they do that?"
<br></br>

<center>
  <br></br>
<strong>View HTML Source Code:</strong>
</center>
<br></br>
Click CTRL + U in an HTML page, or right-click on the page and select "View Page Source". This will open a new tab containing the HTML source code of the page.
<center>
  <br></br>
<b>Inspect an HTML Element:</b>
</center>
<br></br>
Right-click on an element (or a blank area), and choose "Inspect" to see what elements are made up of (you will see both the HTML and the CSS). You can also edit the HTML or CSS on-the-fly in the Elements or Styles panel that opens.

<hr></hr>
<br></br>
<center>
<b><font color="red">HTML Images: </font></b>
</center>
<br></br>
HTML images are defined with the image tag.

The source file (src), alternative text (alt), width, and height are provided as attributes.
<br></br>
<br></br>


<a class="btn btn-primary" href="/Hnext" role="button">Next</a>
</div>
{/* </div> */}

</>

    
    
  )
}