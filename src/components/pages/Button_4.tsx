import './com/Button_4.scss';
import { Group ,Title} from '@mantine/core';
const Button = () => {
  return (
    <>
    <Title align='center' order={1}>Hover Effects #2</Title>
    
      <Group spacing="xl" mt={150}>
        <button className="fill-1">¡Hola!</button>

        <button className="fill-2">Clic aquí</button>

        <button className="fill-4">Aceptar</button>

        <button className="fill-5">Enviar</button>

        <button className="fill-6">Comprar</button>

        <button className="fill-7">Ver más</button>

        <button className="fill-8">Aceptar</button>

      </Group>

      <Group spacing="xl" mt={15}>
        <button className="fill-11">¡Clickea aquí!</button>

        <button className="fill-12">Siguiente</button>



      </Group>

      <Group spacing="xl" mt={15}>
        <button className="fill-9">Enviar</button>

        <button className="fill-13">Enviar</button>

        <button className="fill-14">Enviar</button>

        <button className="fill-15">Enviar</button>


        <button className="fill-16">Enviar</button>


        <button className="fill-17">Enviar</button>

        <button className="fill-18">Enviar</button>
        <button className="fill-19">Enviar</button>
        <button className="fill-20">Enviar</button>


      </Group>

      <Group spacing="xl" mt={15}>
        <button className="fill-10">Aceptar</button>

      </Group>

      <Group spacing="xl" mt={15}>
        <button className="fill-3">Presiona</button>

      </Group>


    </>

  );
};

export default Button;
