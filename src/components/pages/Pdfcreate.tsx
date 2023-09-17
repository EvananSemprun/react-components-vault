import React, { useState } from 'react';
import { BlobProvider } from '@react-pdf-viewer/provider';
import { PDFDocument, rgb } from 'pdf-lib'; // Importa pdf-lib
import diplomaPDF from './DIPLOMA.pdf'; // Asegúrate de tener el archivo DIPLOMA.pdf en tu proyecto

const App = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const generatePDF = async () => {
    try {
      // Cargar el PDF existente
      const existingPdfBytes = await fetch(diplomaPDF).then((res) => res.arrayBuffer());

      // Cargar el PDF en un PDFDocument
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      // Obtener la primera página del PDF
      const [page] = pdfDoc.getPages();

      // Modificar el contenido de la página
      page.drawText(` ${name}`, {
        x: 200,
        y: 330,
        size: 20,
        color: rgb(0, 0, 0), // Color negro
      });
      page.drawText(` ${lastName}`, {
        x: 225,
        y: 260,
        size: 20,
        color: rgb(0, 0, 0), // Color negro
      });

      // Serializar el PDF modificado a bytes
      const modifiedPdfBytes = await pdfDoc.save();

      // Crear una URL para el PDF modificado
      const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));

      // Descargar el PDF modificado
      const a = document.createElement('a');
      a.href = modifiedPdfUrl;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.download = 'modified_diploma.pdf';
      a.click();
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  };

  return (
    <div>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lastName} onChange={handleLastNameChange} />
      </div>
      <div>
        <button onClick={generatePDF}>Generar</button>
      </div>
    </div>
  );
};

export default App;
