import React from 'react'
import Image from 'react-bootstrap/Image'
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./Css/LMSUI.module.css"

export default function Python() {
  return (
    <>
    
   <div className={style.top}>
    <h2 id="what-is-python"><span>What is Python?</span></h2>
   
    <p dir="ltr"><span>Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, and Machine Learning applications, along with all cutting-edge technology in Software Industry. Python language is being used by almost all tech-giant companies like – Google, Amazon, Facebook, Instagram, Dropbox, Uber… etc. </span></p>
   
    <h3>Python Syntax compared to other programming languages</h3>

    <ul>
<li>Python was designed for readability, and has some similarities to the English language with influence from mathematics.</li>
<li>Python uses new lines to complete a command, as opposed to other programming languages which often use semicolons or parentheses.</li>
<li>Python relies on indentation, using whitespace, to define scope; such as the scope of loops, functions and classes. Other programming languages often use curly-brackets for this purpose.</li>
</ul>


<h2 id="install-python">Install Python Separately</h2>

<ListGroup as="ol" numbered>

<ListGroup.Item as="li">Download the <a href="https://www.python.org/downloads/">latest version of Python</a></ListGroup.Item>
<ListGroup.Item as="li">Run the installer file and follow the steps to install Python<br></br>
		During the install process, check <strong>Add Python to environment variables</strong>. This will add Python to environment variables, and you can run Python from any part of the computer.
		<br></br>
		Also, you can choose the path where Python is installed.
		</ListGroup.Item>
{/* <ListGroup.Item as="li"> </ListGroup.Item> */}

	
    </ListGroup>
<br>
</br>

<center>

    <Image src="https://cdn.programiz.com/sites/tutorial2program/files/python-install_0.jpg" thumbnail/> 
    </center>
<br></br>
<p>Once you finish the installation process, you can run Python.</p>
<br></br>
<hr></hr>

<h3 id="immediate-mode">1. Run Python in Immediate mode</h3>
<p>Once Python is installed, typing <code>python</code> in the command line will invoke the interpreter in immediate mode. We can directly type in Python code, and press Enter to get the output.</p>

<center>
<Image src="https://cdn.programiz.com/sites/tutorial2program/files/python-run-command-mode.jpg" thumbnail/>
</center>
<br></br>
<br></br>
<h3 id="ide">2. Run Python in the Integrated Development Environment (IDE)</h3>
<p>We can use any text editing software to write a Python script file.</p>
<p>We just need to save it with the <code>.py</code> extension. But using an IDE can make our life a lot easier. IDE is a piece of software that provides useful features like code hinting, syntax highlighting and checking, file explorers, etc. to the programmer for application development.</p>
<p>By the way, when you install Python, an IDE named <strong>IDLE</strong> is also installed. You can use it to run Python on your computer. It's a decent IDE for beginners.</p>
<p>When you open IDLE, an interactive Python Shell is opened.</p>

<center>
<Image src="https://cdn.programiz.com/sites/tutorial2program/files/idle-python.jpg" thumbnail/>
</center>
<br></br>
<br></br>
<p>Now you can create a new file and save it with <strong>.py</strong> extension. For example, <strong>hello.py</strong></p>
<p>Write Python code in the file and save it. To run the file, go to <strong>Run</strong> &gt; <strong>Run Module</strong> or simply click <strong>F5</strong>.</p>
<br></br>
<br></br>
<center>
<Image src="https://cdn.programiz.com/sites/tutorial2program/files/python-program-run-idle.jpg" thumbnail/>
</center>
</div>
    </>
  )
}
