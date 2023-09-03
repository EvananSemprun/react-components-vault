import { HoverCard, Title, Group, Code, Button, ActionIcon } from '@mantine/core';
import { IconPizza, IconInfoOctagonFilled } from '@tabler/icons-react';
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
  const info7 =
    `<ActionIcon variant="transparent/subtle/default/outline/filled/light" color="dark" >
  <IconPizza size="1rem" />
</ActionIcon>`;
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

      <Group position="center" mt={15} mb={35}>
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

      <HoverCard width={610} shadow="md">
        <HoverCard.Target>
          <ActionIcon >
            <IconInfoOctagonFilled width={48} height={48} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Code block>{info7}</Code>

        </HoverCard.Dropdown>
      </HoverCard>

      <Group position="center" mt={55} mb={10}>
        <ActionIcon variant="transparent" color="dark"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="dark"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="dark"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="dark"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="dark"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="dark"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="red"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="red"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="red"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="red"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="red"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="red"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="pink"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="pink"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="pink"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="pink"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="pink"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="pink"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="grape"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="grape"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="grape"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="grape"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="grape"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="grape"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="violet"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="violet"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="violet"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="violet"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="violet"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="violet"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="indigo"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="indigo"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="indigo"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="indigo"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="indigo"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="indigo"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="blue"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="blue"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="blue"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="blue"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="blue"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="blue"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="cyan"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="cyan"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="cyan"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="cyan"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="cyan"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="cyan"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="teal"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="teal"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="teal"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="teal"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="teal"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="teal"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="green"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="green"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="green"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="green"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="green"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="green"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="lime"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="lime"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="lime"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="lime"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="lime"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="lime"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="yellow"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="yellow"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="yellow"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="yellow"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="yellow"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="yellow"><IconPizza size="1rem" /></ActionIcon>
      </Group>

      <Group position="center" mb={10}>
        <ActionIcon variant="transparent" color="orange"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="subtle" color="orange"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="default" color="orange"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="outline" color="orange"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="filled" color="orange"><IconPizza size="1rem" /></ActionIcon>
        <ActionIcon variant="light" color="orange"><IconPizza size="1rem" /></ActionIcon>
      </Group>
    </>
  );
}

export default Button1;
