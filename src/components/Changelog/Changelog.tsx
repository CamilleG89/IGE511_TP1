import { createSignal } from "solid-js";
import "./Changelog.css";

export default function Changelog() {
  return (
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
          <td>À venir</td>
          <td>Des changements incroyables!</td>
        </tr>
      </tbody>
    </table>
  );
}
