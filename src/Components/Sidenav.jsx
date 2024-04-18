// import React from 'react'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Module1 from "../Module1"
// import { Dropdown } from 'bootstrap';
export default function Sidenav() {

  const [activeModule, setActiveModule] = useState('chapter1');
  return (<>
    
 
<Nav class="navbar bg-body-tertiary fixed-top">
  <div class="container-fluid"> 
    {/* <a class="navbar-brand" href="#">Let's enter LMS</a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Firstpage">Home</a>
          </li>
          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Likings
            </a>




            
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Most Rated Courses</a></li>
              {/* <li><a class="dropdown-item" href="#">Action</a></li> */}
              {/* <li><a class="dropdown-item" href="/Module1">Courses</a></li> */}
              <li>
                <hr class="dropdown-divider"/>
              </li>
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>



          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Valuable Information 
            </a>




            
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/Videosection">Video Section</a></li>
              {/* <li><a class="dropdown-item" href="#">Action</a></li> */}
              <li><a class="dropdown-item" href="/Inlang">PDFs and PPTs</a></li>
              <li>
                <hr class="dropdown-divider"/>
              </li>
              {/* <li><a class="dropdown-item" href="#">Something else here</a></li> */}
            </ul>
          </li>



          <a href='/Firstpage'>
          <button class="btn btn-outline-success" type="submit" >Logout</button> </a>
        </ul>

        {/* <form class="d-flex mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </div>
</Nav>
</>
)
}
