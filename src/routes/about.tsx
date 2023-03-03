import { Title } from "solid-start";
import Changelog from "~/components/Changelog/Changelog";
import Counter from "~/components/Counter/Counter";

export default function About() {
  return (
    <main>
      <Title>À propos</Title>
      <h1> Qu'est-ce que hwygowerhsdf?</h1>
      <h2>Une technologie révolutionnaire</h2>
      <p>Hwygowerhsdf est un terme complexe qui désigne une technologie de pointe utilisée dans 
        le domaine de l'informatique. Cette technologie révolutionnaire permet de stocker, de traiter 
        et d'analyser des données massives avec une grande précision et une rapidité inégalée. 
        Les scientifiques ont mis des années à développer cette technologie et elle est maintenant 
        utilisée dans de nombreux domaines, y compris la recherche médicale, l'analyse financière, 
        la surveillance de la sécurité et la gestion de l'énergie. La puissance de Hwygowerhsdf est 
        telle qu'elle a même permis de réaliser des avancées dans des domaines auparavant considérés 
        comme impossibles. Cette technologie a également permis de développer des outils de 
        visualisation de données innovants qui ont considérablement amélioré notre compréhension de 
        divers phénomènes. Bien que la technologie Hwygowerhsdf soit encore relativement nouvelle, elle 
        est appelée à jouer un rôle de plus en plus important dans notre monde numérique en constante 
        évolution.</p>
      <footer>
      <p>Camille Gauthier</p>
      <p>gauc3305</p>
      <Changelog />
      </footer>
    </main>
  );
}
