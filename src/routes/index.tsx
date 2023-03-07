import { Title } from "solid-start";
import Changelog from "~/components/Changelog/Changelog";
import Counter from "~/components/Counter/Counter";
import Recipe from "~/components/Recipe/Recipe";

export default function Home() {
  return (
    <main>
      <Title>Hwygowerhsdf</Title>
      <Recipe />
      <footer>
      <p>Camille Gauthier</p>
      <p>gauc3305</p>
      <Changelog />
      </footer>
    </main>
  );
}
