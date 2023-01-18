import { Title } from "solid-start";
import Changelog from "~/components/Changelog/Changelog";
import Counter from "~/components/Counter/Counter";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Wiki hwygowerhsdf</h1>
      <p> Camille Gauthier</p>
      <p>gauc3305</p>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <footer>
       <Changelog />
      </footer>
    </main>
  );
}
