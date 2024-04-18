import React, { useState } from "react";
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz from "./Quiz";
import Inlang from './Inlang';
import Apppp from './Apppp'
import Csspdf from "./Csspdf";
import Htmlpdf from "./Pdfs/Htmlpdf";
import Htmlppt from "./Pdfs/Htmlppt";
import Cssppt from "./Pdfs/Cssppt";
import Htmlvideo from "./Pdfs/Htmlvideo";
import CssVideo from "./Pdfs/CssVideo";
import { Link } from 'react-router-dom';
import HtmlQuiz from "./Pdfs/HtmlQuiz";
export default function Module() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDropdown, setSelectedDropdown] = useState(null);
  const [activeModule, setActiveModule] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownSelect = (dropdownName) => {
    setSelectedDropdown(dropdownName);
  };

  const handleNavLinkClick = (module) => {
    setActiveModule(module);
  };

  return (
    <Container fluid>
      <Row style={{ display: "flex" }}>
        <Col md={3} id="sidebar">
          <Navbar style={{ backgroundColor: "#846BD0", borderRadius: "20px", height: "100%" }} expand="lg" className="flex-column align-items-center">
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleSidebar} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="flex-column">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="sidebar-header">
                  <svg style={{ marginLeft: "10px" }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-book-half" viewBox="0 0 16 16">
                    <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                  </svg>
                  <h5 style={{ padding: "5px", margin: '5px', marginLeft: '20px' }}>Course content</h5>
                </div>
                <div className="app">
                  <button onClick={toggleSidebar}>Gain More</button>
                  <br></br>
                  <div>
                    <ul>
                      <li onClick={() => handleDropdownSelect('dropdown1')}>
                        HTML Course
                        {selectedDropdown === 'dropdown1' && (
                          <ul className="dropdown">
                            
                           {/* <li>
                            <Nav.Link onClick={() => handleNavLinkClick("inlang") }> PDF & PPT</Nav.Link>
                            </li>
                            */}
                              <li>
                            <Nav.Link onClick={() => handleNavLinkClick("htmlquiz")}> HTML Quiz</Nav.Link>
                            </li>
                           

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("htmlpdf")}>HTML PDF</Nav.Link>
                            </li>

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("htmlppt")}>HTML PPT</Nav.Link>
                            </li>

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("htmlvideo")}>HTMLVideo </Nav.Link>
                            </li>

                           
                          </ul>
                          
                        )}
                      </li>

                      <li onClick={() => handleDropdownSelect('dropdown2')}>
                        CSS Course
                        {selectedDropdown === 'dropdown2' && (
                          <ul className="dropdown">
                           <li>
                           <Nav.Link onClick={() => handleNavLinkClick("apppp")}>CSS Quiz</Nav.Link>
                           </li>

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("csspdf")}>CSS PDF</Nav.Link>
                            </li>

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("cssppt")}>CSS PPT</Nav.Link>
                            </li>

                            <li>
                            <Nav.Link onClick={() => handleNavLinkClick("cssvideo")}>CSS Video</Nav.Link>
                            </li>

                            {/* <li>Option C</li> */}

                          </ul>
                          
                        )}
                      </li>
                    </ul>

                    <Link to="/Videosection" style={{color: 'black'}}>
                     <li> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="white" class="bi bi-camera-video" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"/>
</svg> <b>Videos Point</b></li></Link>

<br></br>
<Link to="/Inlang" style={{color: 'white'}}>
                     <li> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="black" class="bi bi-file-pdf-fill" viewBox="0 0 16 16">
  <path d="M5.523 10.424q.21-.124.459-.238a8 8 0 0 1-.45.606c-.28.337-.498.516-.635.572l-.035.012a.3.3 0 0 1-.026-.044c-.056-.11-.054-.216.04-.36.106-.165.319-.354.647-.548m2.455-1.647q-.178.037-.356.078a21 21 0 0 0 .5-1.05 12 12 0 0 0 .51.858q-.326.048-.654.114m2.525.939a4 4 0 0 1-.435-.41q.344.007.612.054c.317.057.466.147.518.209a.1.1 0 0 1 .026.064.44.44 0 0 1-.06.2.3.3 0 0 1-.094.124.1.1 0 0 1-.069.015c-.09-.003-.258-.066-.498-.256M8.278 4.97c-.04.244-.108.524-.2.829a5 5 0 0 1-.089-.346c-.076-.353-.087-.63-.046-.822.038-.177.11-.248.196-.283a.5.5 0 0 1 .145-.04c.013.03.028.092.032.198q.008.183-.038.465z"/>
  <path fill-rule="evenodd" d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m.165 11.668c.09.18.23.343.438.419.207.075.412.04.58-.03.318-.13.635-.436.926-.786.333-.401.683-.927 1.021-1.51a11.6 11.6 0 0 1 1.997-.406c.3.383.61.713.91.95.28.22.603.403.934.417a.86.86 0 0 0 .51-.138c.155-.101.27-.247.354-.416.09-.181.145-.37.138-.563a.84.84 0 0 0-.2-.518c-.226-.27-.596-.4-.96-.465a5.8 5.8 0 0 0-1.335-.05 11 11 0 0 1-.98-1.686c.25-.66.437-1.284.52-1.794.036-.218.055-.426.048-.614a1.24 1.24 0 0 0-.127-.538.7.7 0 0 0-.477-.365c-.202-.043-.41 0-.601.077-.377.15-.576.47-.651.823-.073.34-.04.736.046 1.136.088.406.238.848.43 1.295a20 20 0 0 1-1.062 2.227 7.7 7.7 0 0 0-1.482.645c-.37.22-.699.48-.897.787-.21.326-.275.714-.08 1.103"/>
</svg> <b>PDFs & PPTs Section</b></li></Link>

                  </div>
                  <div className="main-content">
                    {/* Main content goes here  below dropdown*/} 
                  </div>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
        <Col md={9} id="content">
          {/* <h4>HTML CONTENT</h4> */}
          <Container>
            <div>

              <div style={{ width: '100%', height: '800px' }}>
               
                {activeModule === "htmlquiz" && <HtmlQuiz />}
             
                {activeModule === "inlang" && <Inlang />}
             
                {activeModule === "apppp" && <Apppp />}

                {activeModule === "csspdf" && <Csspdf />}
                          
                {activeModule === "htmlpdf" && <Htmlpdf />}
                
                {activeModule === "htmlppt" && <Htmlppt/>}
                
                {activeModule === "cssppt" && <Cssppt/>}
               
                {activeModule === "htmlvideo" && <Htmlvideo/>}
               
                {activeModule === "cssvideo" && <CssVideo/>}
               

              </div>
              
            </div>
          </Container>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}