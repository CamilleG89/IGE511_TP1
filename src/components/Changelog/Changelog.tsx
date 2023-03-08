import { createSignal } from "solid-js";
import "./Changelog.css";

export default function Changelog() {
  return (
    <div class="foot">
      <p>Camille Gauthier - gauc3305</p>
      <table class="ChangelogTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Changements</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>18 janvier 2023</td>
            <td>Implémentation initiale</td>
          </tr>
          <tr>
            <td>3 mars 2023</td>
            <td>Ajout de la page À propos</td>
          </tr>
          <tr>
            <td>5 mars 2023</td>
            <td>Changement du nom du site de "Wiki hwygowerhsdf" à uniquement hwygowerhsdf</td>
          </tr>
          <tr>
            <td>7 mars 2023</td>
            <td>Ajout d'une recette dans la page d'accueil</td>
          </tr>
          <tr>
            <td>7 mars 2023</td>
            <td>Ajustement barre de navigation, bas de page et des espaces sur le site</td>
          </tr>
          <tr>
            <td>7 mars 2023</td>
            <td>Fixation de la position de la barre de navigation</td>
          </tr>
          <tr>
            <td>7 mars 2023</td>
            <td>Ajustement de la taille du titre de la page Index</td>
          </tr>
          <tr>
            <td>7 mars 2023</td>
            <td>Ajout de la meilleure page</td>
          </tr>
          <tr>
            <td>À venir</td>
            <td>Des changements incroyables!</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
