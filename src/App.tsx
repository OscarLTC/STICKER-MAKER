import { Sheet } from './components/sheet'
import { Form } from './components/form'
import jsPDF from 'jspdf'
import './app.css'
import { useState } from 'react'
import printJS from 'print-js'
import html2canvas from 'html2canvas'
function App() {
  //Funtion to create docx

  // const handleDownloadPDF = () => {
  //   const divElement = document.getElementById('my-div')

  //   if (!divElement) {
  //     console.error('El elemento con id "my-div" no fue encontrado.')
  //     return
  //   }

  //   html2canvas(divElement).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/png')
  //     const pdf = new jsPDF()
  //     pdf.addImage(
  //       imgData,
  //       'PNG',
  //       0,
  //       0,
  //       pdf.internal.pageSize.getWidth(),
  //       pdf.internal.pageSize.getHeight(),
  //     )
  //     pdf.save('documento.pdf')
  //   })
  // }

  // return (
  //   <div>
  //     <div
  //       id='my-div'
  //       style={{ width: '21cm', height: '29.7cm', border: '1px solid #ccc' }}
  //     >
  //       {/* Contenido de tu hoja de trabajo */}
  //       <h1>Mi Hoja de Trabajo</h1>
  //       <p>Contenido del documento...</p>
  //     </div>
  //     <button onClick={handleDownloadPDF}>Descargar como PDF</button>
  //   </div>
  // )
  return (
    <div className='h-[100vh] flex'>
      <Sheet />
      <Form />
    </div>
  )
}

export default App
