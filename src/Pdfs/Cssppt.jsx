import React from 'react'

export default function Cssppt() {
  return (
    <div style={{ width: '100%', height: '800px' }}>
    <iframe
           title="PPT Viewer"
       //    src= "https://docs.google.com/viewerng/viewer?url=http://playppt.com/wp-content/uploads/2015/01/HTML-Basics-PPT.pptx&hl=en_US"
   
           src="https://docs.google.com/presentation/d/1j6CqGnWdBiWGyxFVLZBjIADFpv0aUj65zHpsri5bMHs/edit?pli=1#slide=id.p"
           width="100%"
           height="100%"
           
         >
           {/* This browser does not support PDFs. Please download the PDF to view it. */}
         </iframe>
   </div>

  )
}
