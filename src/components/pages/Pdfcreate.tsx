import React, { useState } from 'react';
import diplomaPDF from './DIPLOMA2.pdf';
import { PDFDocument, rgb } from 'pdf-lib';
import { Card, Divider, Button, TextInput, Text, NumberInput, ScrollArea, Group } from '@mantine/core';

const App = () => {
  const [numPeople, setNumPeople] = useState(1);
  const [peopleData, setPeopleData] = useState([{ name: '', cedula: '' }]);
  const [hours, setHours] = useState(''); 
  const [title, setTitle] = useState(''); 

  const handleNumPeopleChange = (value: number | "") => {
    const numValue = value === "" ? 1 : value;
    setNumPeople(numValue);
    const newData = Array.from({ length: numValue }, () => ({ name: '', cedula: '' }));
    setPeopleData(newData);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...peopleData];
    updatedData[index].name = event.target.value;
    setPeopleData(updatedData);
  };

  const handleCedulaChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const updatedData = [...peopleData];
    updatedData[index].cedula = event.target.value;
    setPeopleData(updatedData);
  };

  const handleHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(event.target.value); 
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value); 
  };

  const isFormComplete = () => {
    return (
      peopleData.every(person => person.name.trim() !== '' && person.cedula.trim() !== '') &&
      hours.trim() !== '' &&
      title.trim() !== ''
    );
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
          size: 40,
          color: rgb(0, 0, 0),
        });

        page.drawText(`${peopleData[i].cedula}`, {
          x: 305,
          y: 280,
          size: 20,
          color: rgb(0, 0, 0),
        });

        page.drawText(`${title}`, {
          x: 120,
          y: 200,
          size: 40,
          color: rgb(0, 0, 0),
        });

        page.drawText(`${hours}`, {
          x: 355,
          y: 100,
          size: 15,
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
      a.download = 'diploma ' + `${title}` + '.pdf';
      a.click();
    } catch (error) {
      console.error('Error al generar el PDF:', error);
    }
  };

  return (
    <>
      <Group position="center" >
        <Card w={450} mt={15} shadow="xl" padding="lg" radius="md" withBorder>
          <Text size="md">Título:</Text>
          <TextInput
            variant="filled"
            radius="md"
            value={title}
            onChange={handleTitleChange}
            mb={10}
          />

          <Text size="md">Horas:</Text>
          <TextInput
            variant="filled"
            radius="md"
            value={hours}
            onChange={handleHoursChange}
            mb={10}
          />
        </Card>

        <Card w={450} mt={15} ml={25} mr={25} shadow="xl" padding="lg" radius="md" withBorder>
          <Text size="md">Número de personas a registrar:</Text>
          <NumberInput
            value={numPeople}
            min={1}
            w="100%"
            onChange={handleNumPeopleChange}
            placeholder="Your age"
            radius="md"
            size="lg"
            mb={10}
          />

          <ScrollArea style={{ height: 670 }} type="never">
            {peopleData.map((person, index) => (
              <div key={index}>
                <Text size="md">Nombre Numero {index + 1}</Text>
                <TextInput
                  variant="filled"
                  radius="md"
                  value={person.name}
                  onChange={(e) => handleNameChange(e, index)}
                />
                <Text size="md">Cédula Numero {index + 1}</Text>
                <TextInput
                  variant="filled"
                  radius="md"
                  value={person.cedula}
                  onChange={(e) => handleCedulaChange(e, index)}
                />
                <Divider my="sm" />
              </div>
            ))}
          </ScrollArea>
          <Button
            onClick={generatePDFs}
            variant="filled"
            color="indigo"
            fullWidth
            disabled={!isFormComplete()}
          >
            Generar
          </Button>
        </Card>
      </Group>
    </>
  );
};

export default App;
