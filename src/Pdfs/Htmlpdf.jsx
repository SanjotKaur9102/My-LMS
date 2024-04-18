import React from 'react'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import style from "../Css/LMSUI.module.css"
// import pdf from '../assets/python-basics-sample-chapters.pdf';
import pdf from "../assets/1Html.pdf";
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
// import styles from '../css/pdf.module.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;


 
export default function Htmlpdf() {


  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };



  return (
    
    <div>

{/* <div style={{ width: '100%', height: '800px' }}>
 <iframe
        title="PDF Viewer"
        src="https://www.webdesign.org/downloads/Beginners_Guide_to_HTML.pdf"
        width="100%"
        height="100%"
        
      >
       
      </iframe>
</div> */}






<div className={style.pdf}>
<Document

            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
          >


<div className={style.pdfbtn}> 
          <button onClick={goToPreviousPage}><FaArrowLeft /></button>
          <span style={{ marginLeft: "10px", marginRight: "10px",justifyContent:"center",marginTop:"8px",paddingTop:"7px" }}>
            Page {pageNumber} of {numPages}
          </span>
          <button onClick={goToNextPage}><FaArrowRight /></button>
</div>

            <Page pageNumber={pageNumber} />
          </Document>
          </div>
       






    </div>
  )
}
 
  