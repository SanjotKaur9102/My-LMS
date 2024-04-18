import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../Css/LMSUI.module.css"

export default function Js() {
  return (<>
    {/* <div>Js</div> */}
   


    



    <div style={{backgroundColor:"black", color:"white", fontSize:35}}>
<center>
<h1><b><font color="green">Why to learn Javascript? </font></b></h1>
</center>
<p>JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language. It is a powerful programming language that can add interactivity to a website. It was invented by Brendan Eich.. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.</p>
<br></br>
<p>JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements. </p>

<li>
    <b><u> Client-side:</u></b> It supplies objects to control a browser and its Document Object Model (DOM). Like if client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation. Useful libraries for the client side are AngularJS, ReactJS, VueJS, and so many others.
</li> <br></br>
<li><b><u>Server-Side:</u></b> It supplies objects relevant to running JavaScript on a server. For if the server-side extensions allow an application to communicate with a database, and provide continuity of information from one invocation to another of the application, or perform file manipulations on a server. The useful framework which is the most famous these days is node.js.</li>
<br></br><li><b><u>Imperative language –</u></b> In this type of language we are mostly concerned about how it is to be done. It simply controls the flow of computation. The procedural programming approach, object, oriented approach comes under this as async await we are thinking about what is to be done further after the async call.</li>
<br></br><li><b><u>Declarative programming –</u></b> In this type of language we are concerned about how it is to be done, basically here logical computation requires. Her main goal is to describe the desired result without direct dictation on how to get it as the arrow function does.</li>
<br></br>
<center><h1><font color="green">How to Link JavaScript File in HTML ?</font></h1></center><br>
</br>
<p><i><h2>JavaScript can be added to HTML file in two ways:</h2> </i></p>
<li><b> <font color="aqua"> Internal JS: </font></b>We can add JavaScript directly to our HTML file by writing the code inside the (script) tag. The(script)  tag can either be placed inside the (head) or the (body) tag according to the requirement.</li> 


<li><b> <font color="aqua"> External JS: </font></b>We can write JavaScript code in another files having an extension.js and then link this file inside the (head)tag of the HTML file in which we want to add this code. </li>
<br></br><br></br>

<h1><font color="green"> Different Ways to Use JavaScript:</font></h1> <br></br>

<h2> <font color="aqua"> 1. Using Console Tab of Web Browsers</font></h2> <br></br> <hr></hr>
<div  className={style.Jpic}>
    
<img src="https://www.programiz.com/sites/tutorial2program/files/inspect-browser.png "/>  </div>
<br></br><br></br>
<h2> <font color="aqua"> 2. Using Node.JS</font></h2> <br></br> <hr></hr><br></br>
<img src="https://www.programiz.com/sites/tutorial2program/files/hello-node-ide.png"/>  


<a class="btn btn-primary" href="/Dashboard" role="button">Previous</a>

</div>
</>
  )
}
