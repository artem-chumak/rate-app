import { Button, Htag } from '../components';

export default function Home(): JSX.Element {

  return (
    <>
    <div>
      <Htag tag='h1'>Hello world!</Htag>
      <Button appearance='primary' arrow='right'>Click me</Button>
      <Button appearance='ghost' arrow='down'>Click me</Button>
    </div>
    </>
  );
}
