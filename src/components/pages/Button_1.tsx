import { HoverCard, Title, Group, Code, Button, ActionIcon } from '@mantine/core';
import { IconInfoOctagonFilled } from '@tabler/icons-react';
function Button1() {
  const info1 = `
  <Button color="red" radius="xs" size="xs/md/lg/xl">
          hola
        </Button>
  `;

  const info2 = `
  <Button  variant="light" color="red" radius="xs" size="xs/md/lg/xl">
          hola
        </Button>
  `;

  const info3 = `
  <Button variant="outline" variant="light" color="red" radius="xs" size="xs/md/lg/xl">
          hola
        </Button>
  `;
  const info4 = `
  <Button variant="subtle" variant="light" color="red" radius="xs" size="xs/md/lg/xl">
          hola
        </Button>
  `;
  const info5 = `
  <Button color="dark" radius="xs">
          hola
        </Button>
  `;
  const info6 = `
  <Button color="dark" radius="xl" size="xs">
          hola
        </Button>
  `;
  return (
    <>
      <Title align='center' order={1}>Mantine Button</Title>
      <Group position="center">

        <HoverCard width={410} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info1}</Code>

          </HoverCard.Dropdown>
        </HoverCard>


        <Button color="red" radius="xs" size="xs">
          hola
        </Button>

        <Button color="red" radius="xs">
          hola
        </Button>

        <Button color="red" radius="xs" size="md">
          hola
        </Button>

        <Button color="red" radius="xs" size="lg">
          hola
        </Button>

        <Button color="red" radius="xs" size="xl">
          hola
        </Button>

      </Group>


      <Group position="center" mt={15}>

        <HoverCard width={520} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info2}</Code>

          </HoverCard.Dropdown>
        </HoverCard>

        <Button variant="light" color="indigo" radius="xs" size="xs">
          hola
        </Button>

        <Button variant="light" color="indigo" radius="xs">
          hola
        </Button>

        <Button variant="light" color="indigo" radius="xs" size="md">
          hola
        </Button>

        <Button variant="light" color="indigo" radius="xs" size="lg">
          hola
        </Button>

        <Button variant="light" color="indigo" radius="xs" size="xl">
          hola
        </Button>

      </Group>

      <Group position="center" mt={15}>

        <HoverCard width={630} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info3}</Code>

          </HoverCard.Dropdown>
        </HoverCard>


        <Button variant="outline" color="green" radius="xs" size="xs">
          hola
        </Button>

        <Button variant="outline" color="green" radius="xs">
          hola
        </Button>

        <Button variant="outline" color="green" radius="xs" size="md">
          hola
        </Button>

        <Button variant="outline" color="green" radius="xs" size="lg">
          hola
        </Button>

        <Button variant="outline" color="green" radius="xs" size="xl">
          hola
        </Button>
      </Group>

      <Group position="center" mt={15}>

        <HoverCard width={630} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info4}</Code>

          </HoverCard.Dropdown>
        </HoverCard>

        <Button variant="subtle" color="yellow" radius="xs" size="xs">
          hola
        </Button>

        <Button variant="subtle" color="yellow" radius="xs">
          hola
        </Button>

        <Button variant="subtle" color="yellow" radius="xs" size="md">
          hola
        </Button>

        <Button variant="subtle" color="yellow" radius="xs" size="lg">
          hola
        </Button>

        <Button variant="subtle" color="yellow" radius="xs" size="xl">
          hola
        </Button>

      </Group>

      <Group position="center" mt={15}>

        <HoverCard width={330} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info5}</Code>

          </HoverCard.Dropdown>
        </HoverCard>

        <Button color="dark" radius="xs">
          hola
        </Button>
        <Button color="gray" radius="xs">
          hola
        </Button>
        <Button color="red" radius="xs">
          hola
        </Button>
        <Button color="pink" radius="xs">
          hola
        </Button>
        <Button color="grape" radius="xs">
          hola
        </Button>
        <Button color="violet" radius="xs">
          hola
        </Button>
        <Button color="indigo" radius="xs">
          hola
        </Button>
        <Button radius="xs">
          hola
        </Button>
        <Button color="cyan" radius="xs">
          hola
        </Button>
        <Button color="teal" radius="xs">
          hola
        </Button>
        <Button color="green" radius="xs">
          hola
        </Button>
        <Button color="lime" radius="xs">
          hola
        </Button>
        <Button color="yellow" radius="xs">
          hola
        </Button>
        <Button color="orange" radius="xs">
          hola
        </Button>
      </Group>

      <Group position="center" mt={15}>
        <HoverCard width={430} shadow="md">
          <HoverCard.Target>
            <ActionIcon >
              <IconInfoOctagonFilled width={48} height={48} />
            </ActionIcon>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Code block>{info6}</Code>

          </HoverCard.Dropdown>
        </HoverCard>
        <Button color="dark" radius="xl" size="xs">
          hola
        </Button>
        <Button color="gray" radius="xl" size="xs">
          hola
        </Button>
        <Button color="red" radius="xl" size="xs">
          hola
        </Button>
        <Button color="pink" radius="xl" size="xs">
          hola
        </Button>
        <Button color="grape" radius="xl" size="xs">
          hola
        </Button>
        <Button color="violet" radius="xl" size="xs">
          hola
        </Button>
        <Button color="indigo" radius="xl" size="xs">
          hola
        </Button>
        <Button radius="xl" size="xs">
          hola
        </Button>
        <Button color="cyan" radius="xl" size="xs">
          hola
        </Button>
        <Button color="teal" radius="xl" size="xs">
          hola
        </Button>
        <Button color="green" radius="xl" size="xs">
          hola
        </Button>
        <Button color="lime" radius="xl" size="xs">
          hola
        </Button>
        <Button color="yellow" radius="xl" size="xs">
          hola
        </Button>
        <Button color="orange" radius="xl" size="xs">
          hola
        </Button>
      </Group>
    </>
  );
}

export default Button1;
