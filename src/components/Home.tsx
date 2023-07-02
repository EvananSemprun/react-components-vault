import React, { useState, ChangeEvent } from 'react';
import { Card, Title, Text, Button, Grid, Input } from '@mantine/core';
import co from './co.json';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = co.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Title mb={15} align="center" order={1}>
        Nose que poner
      </Title>

      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
        style={{ marginBottom: '1rem' }}
      />

      <Grid gutter="lg">
        {filteredData.map((item, index) => (
          <Card key={index} ml={50} mt={15} shadow="xl" padding="lg">
            <img src={item.imagen} alt={item.nombre} style={{ marginBottom: '1rem' }} />
            <Text variant="h4" style={{ marginBottom: '0.5rem' }}>
              {item.nombre}
            </Text>
            <Button component="a" href={item.ruta} fullWidth>
              Ver componente
            </Button>
          </Card>
        ))}
      </Grid>
    </>
  );
}

export default Home;
