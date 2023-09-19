import React, { useState } from 'react';
import { PDFDocument, rgb } from 'pdf-lib';
import { Card, Title,Divider , Button,Input, Text, NumberInput, PasswordInput, Group } from '@mantine/core';
import diplomaPDF from './DIPLOMA2.pdf';

const App = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [peopleData, setPeopleData] = useState([{ name: '', lastName: '' }]);

  const handleNumPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setNumPeople(value);
    const newData = Array.from({ length: value }, () => ({ name: '', lastName: '' }));
    setPeopleData(newData);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...peopleData];
    updatedData[index].name = event.target.value;
    setPeopleData(updatedData);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...peopleData];
    updatedData[index].lastName = event.target.value;
    setPeopleData(updatedData);
  };

  const generatePDFs = async () => {
    try {
      const existingPdfBytes = await fetch(diplomaPDF).then((res) => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);

      for (let i = 0; i < numPeople; i++) {
        const srcDoc = await PDFDocument.load(existingPdfBytes);
        const [page] = srcDoc.getPages();

        page.drawText(`${peopleData[i].name}`, {
          x: 208,
          y: 310,
          size: 30,
          color: rgb(0, 0, 0),
        });

        page.drawText(`${peopleData[i].lastName}`, {
          x: 205,
          y: 280,
          size: 20,
          color: rgb(0, 0, 0),
        });

        const copiedPages = await pdfDoc.copyPages(srcDoc, [0]);
        pdfDoc.addPage(copiedPages[0]);


      }

      const modifiedPdfBytes = await pdfDoc.save();

      const modifiedPdfUrl = URL.createObjectURL(new Blob([modifiedPdfBytes], { type: 'application/pdf' }));

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
    <Card w={450} shadow="sm" padding="lg" radius="md" withBorder>
      <Group >

        <Text size="md">Número de personas a registrar:</Text>
        <input type="number" value={numPeople} onChange={handleNumPeopleChange} />
      </Group>

      {peopleData.map((person, index) => (
        <div key={index}>

          <Text size="md">Nombre</Text>
          <Input variant="filled" size="xs" radius="md" value={person.name} onChange={(e) => handleNameChange(e, index)}/>


          <Text size="md">Cedula</Text>
          <Input variant="filled" size="xs" radius="md"  value={person.lastName} onChange={(e) => handleLastNameChange(e, index)}  />
          <Divider my="sm" />

        </div>
      ))}
        <Button onClick={generatePDFs} variant="filled" color="indigo" fullWidth>Generar</Button>


    </Card>
  );
};

export default App; 