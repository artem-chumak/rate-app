import { useEffect, useState } from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  useEffect(() => {
    console.log("counter " + counter);
    return function cleanUp() {
      console.log("unmounted");
    };
  },[]);

  return (
    <>
      <div>
        <Htag tag="h1">Hello world! {counter}</Htag>
        <Paragraph>Hello world and other people</Paragraph>
        <Paragraph size="xs">Hello world and other people</Paragraph>
        <Paragraph size="xl">Hello world and other people</Paragraph>
        <Button
          appearance="primary"
          arrow="right"
          onClick={() => setCounter((x) => x + 1)}
        >
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
        <Tag color="primary">THise is S green</Tag>
        <Rating rating={rating} isEditable={true} setRating={setRating} />
      </div>
    </>
  );
}

export default withLayout (Home);
