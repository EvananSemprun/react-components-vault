import { useState, ChangeEvent } from 'react';
import { Card, Title, Text, Button, Grid, Input } from '@mantine/core';
import { motion } from 'framer-motion'; // Importa motion desde Framer Motion
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
        REACT
      </Title>

      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar..."
        style={{ marginBottom: '1rem' }}
      />

      <Grid gutter="lg" style={{ justifyContent: 'center' }}>
        {filteredData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }} // Animación inicial
            animate={{ opacity: 1, scale: 1 }} // Animación al cargar
            whileHover={{ scale: 1.2 }} // Animación al hacer hover
            transition={{ duration: 0.5 }} // Duración de la animación
            style={{ minWidth: '250px', maxWidth: '400px' }}
          >
            <Card
              mt={25}
              shadow="xl"
              padding="lg"
              mb={2}
              ml={15}
              mr={15}
              style={{ width: '85%'}}
            >
              <img
                src={item.imagen}
                alt={item.nombre}
                style={{
                  marginBottom: '1rem',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                }}
              />
              <Text variant="h4" style={{ marginBottom: '0.5rem' }}>
                {item.nombre}
              </Text>
              <Button component="a" href={item.ruta} fullWidth>
                Ver componente
              </Button>
            </Card>
          </motion.div>
        ))}
      </Grid>
    </>
  );
}

export default Home;
