import { Card,  Title, Button, NumberInput, PasswordInput, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { motion } from 'framer-motion';

function Login1() {
  const form = useForm({
    initialValues: {
      user: '',
      password: '',
    },

    validate: {
      user: (value) => (/^\S+@\S+$/.test(value) ? null : 'Usuario es requerido'),
      password: (value) => (value.length >= 6 ? null : 'La contraseña es requerida'),
    },
  });


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '75vh' }}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: 'spring',
          stiffness: 270,
          damping: 95,
        }}
      >
        <Card shadow="xl" padding="xl" radius="xl" withBorder w={550}>
          <Title order={3} align="center" mb={45}>
            Bienvenido
          </Title>

          <form onSubmit={form.onSubmit((values) => console.log(values))}>



            <NumberInput
              placeholder="Usuario"
              label="Usuario"
              radius="xl"
              mb={15}
              {...form.getInputProps('user')}

              hideControls
            />


            <PasswordInput
              placeholder="Contraseña"
              label="Contraseña"
              radius="xl"
              {...form.getInputProps('password')}
            />

            <Group position="center" mt={25}>
              <Button color="indigo" type="submit">Enviar</Button>
            </Group>
          </form>
        </Card>
      </motion.div>
    </div>
  );
}

export default Login1;
