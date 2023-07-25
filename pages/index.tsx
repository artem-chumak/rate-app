import { Button, Htag, Paragraph, Tag } from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <div>
        <Htag tag="h1">Hello world!</Htag>
        <Paragraph>Hello world and other people</Paragraph>
        <Paragraph size="xs">Hello world and other people</Paragraph>
        <Paragraph size="xl">Hello world and other people</Paragraph>
        <Button appearance="primary" arrow="right">
          Click me
        </Button>
        <Button appearance="ghost" arrow="down">
          Click me
        </Button>
        <Tag size="s">THis is So smol</Tag>
        <Tag size="m" color="red">
          This is M red
        </Tag>
        <Tag size="s" color="green">
          THise is S green
        </Tag>
        <Tag color="primary">
          THise is S green
        </Tag>
      </div>
    </>
  );
}
