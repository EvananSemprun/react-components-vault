import { HoverCard, Code, Button, Text, Group, Grid } from '@mantine/core';
import { IconDatabase } from '@tabler/icons-react';

function Button1() {
  const uno = `
  <Button color="red" radius="xs">
             hola
    </Button>
  `;
  return (
    <>
      <Grid >

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button color="red" radius="xs">
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  {uno}
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>


        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button color="pink" radius="xl" >
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button color="green" radius="xs" uppercase>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button radius="xs" disabled>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button color="violet" radius="xs" compact>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button radius="xs" size="xl" compact>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

        <Grid.Col span={2}>
          <Group position="center">
            <HoverCard width={280} shadow="md">
              <HoverCard.Target>
                <Button leftIcon={<IconDatabase size="1rem" />}>
                  hola
                </Button>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                <Code>
                  Hover card is revealed when user hovers over target element, it will be hidden once
                  mouse is not over both target and dropdown elements
                </Code>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

        </Grid.Col>

      </Grid>

    </>
  );
}

export default Button1;
