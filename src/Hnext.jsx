import React from 'react'
import Image from 'react-bootstrap/Image'
import { Col } from 'react-bootstrap'
import style from "./Css/LMSUI.module.css"

export default function() {
  return (<>   
    <row>
    <Col sm={7}>   <div className={style.top}>
   
    <Col sm={5}>
    <Image src="https://th.bing.com/th/id/OIP.1OInQ_EtpV8ukOHGAWR43AAAAA?w=378&h=247&rs=1&pid=ImgDetMain"/>
    </Col>

   <h2>Learn HTML Using Notepad or TextEdit</h2>
   
    <p>Web pages can be created and modified by using professional HTML editors.</p>
   

    



    <p>However, for learning HTML we recommend a simple text editor like Notepad (PC) or TextEdit (Mac).</p>
   
    <p>We believe that using a simple text editor is a good way to learn HTML.</p>

    <p>Follow the steps below to create your first web page with Notepad or TextEdit.</p>

    <hr></hr>

    <h2>Step 1: Open Notepad (PC)</h2>

    <p><strong>Windows 8 or later:</strong></p>

    <p>Open the <strong>Start Screen</strong> (the window symbol at the bottom left on your screen). Type <strong>Notepad</strong>.</p>

    <p><strong>Windows 7 or earlier:</strong></p>

    <p>Open <strong>Start</strong> &gt;<strong> 
Programs &gt;</strong> <strong>Accessories &gt;</strong> <strong>Notepad</strong></p>


<br></br>
<h2>Step 1: Open TextEdit (Mac)</h2>

<p>Then under "Open and Save", check the box that says "Display HTML files as HTML code instead of formatted text".</p>

<p>Also change some preferences to get the application to 
save files correctly.
<span>In </span><strong>Preferences &gt; Format &gt; 
</strong>choose<strong> "Plain Text"</strong></p>

<p ><strong>Then open a new document to place the code.</strong></p>
<hr></hr>
<br></br>
<br></br>
<h2>Step 2: Write Some HTML</h2>

<Image src="https://www.w3schools.com/html/img_notepad.png" thumbnail />
<hr></hr>
<br></br>
<br></br>
<h2>Step 3: Save the HTML Page</h2>

<p>Save the file on your computer. Select <strong>File &gt; Save as</strong> in the Notepad menu.</p>
<p>Name the file <strong>"index.htm"</strong> and set the encoding to 
<strong>UTF-8</strong> (which is the preferred encoding for HTML files).</p>

<Image src="https://www.w3schools.com/html/img_saveas.png" thumbnail/>

<div class="w3-panel w3-note">
  <p><strong>Tip:</strong> You can use either .htm or .html as file extension. There is no difference; it is up to you.</p>
</div>
<br></br>
<br></br>
<h2>Step 4: View the HTML Page in Your Browser</h2>

<p>The result will look much like this:</p>
<Image src="https://www.w3schools.com/html/img_chrome.png" thumbnail/>



<br></br>
<br></br>
<br></br>
<a class="btn btn-primary" href="/Html" role="button">Previous</a>
</div>
</Col>

</row>


    </>

  )
}
