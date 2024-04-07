import React, { useState } from 'react'
import Courses from './Courses'
import style from "./Css/LMSUI.module.css"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { DefaultLayoutPlugin, defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { Viewer,Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'
import '@react-pdf-viewer/default-layout/lib/styles/index.css'
import container from 'react-bootstrap/Container';

export default function Inlang() {

// const [pdfFile,setPDFFile]=useState(null)
// const [viewPdf,setViewPdf]=useState(null)
// const fileType=['application/pdf']
// const handleChange=(e)=>{
//   let selectedFile=e.target.files[0]
//   if(selectedFile){
//     if(selectedFile&& fileType.includes(selectedFile.type)) {
//       let reader=new FileReader()
//       reader.readAsDataURL(selectedFile)
//       reader.onload=(e)=>{
//         setPDFFile(e.target.result)
//       }
//     }
//     else{
//       setPDFFile(null)
//     }
//   }
//   else{
//     console.log("please select")
//   }
// }

// const handleSubmit=(e)=>{
//   e.preventDefault()
//   if(pdfFile!==null){
//     setViewPdf(pdfFile)
//   }
//   else{
//     setViewPdf(null)
//   }
// }
// const newplugin=defaultLayoutPlugin()






//   const docs = [
//     { uri: "C:\Users\sanjo\OneDrive\Desktop\html.pdf",  
//     fileType: "pdf",
//     fileName:"html.pdf"

//   },

//   { src: "https://docs.google.com/presentation/d/1j6CqGnWdBiWGyxFVLZBjIADFpv0aUj65zHpsri5bMHs/edit?usp=sharing",
//   fileType: "ppt",
//   fileName:"html.ppt"

// },

//   ];

  return (<>
  
    <center>
        <div  className={style.head}>
        <h1 > Learn Different Languages in convient manner</h1>
        </div>
        </center>
        
        <div className='container'>
{/* <form onSubmit={handleSubmit}>
  <input type="file" className='form-control' onChange={handleChange}></input>
<button type='submit' className='btn btn-success' > View PDF</button>
</form> */}

<h2>View PDF</h2>
<div className={style.pdf-container}>
  <iframe
  title="PDF Viewer"
  src="C:\Users\sanjo\OneDrive\Desktop\html.pdf"
  width="100%"
  height="43%">
    Pdf not supported
  </iframe>
{/* <Worker workerUrl="https://www.webdesign.org/downloads/Beginners_Guide_to_HTML.pdf">
  {viewPdf && <>
  <Viewer fileUrl={viewPdf} plugins={{newplugin}}/>
  </>}
</Worker> */}
</div>
</div>
</>
)
  }
  
   
        
        {/* <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} 
        style={{height:1000}}
        />
        */}
       
        {/* </div> */}




    
