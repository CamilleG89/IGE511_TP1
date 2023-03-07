import { createSignal } from "solid-js";
import "./Recipe.css";

export default function Recipe() {
  return (
    <div class="Recipe">
      <h1>La meilleure recette de Hwygowerhsdf!</h1>
      <p>Bienvenue sur Hwygowerhsdf, notre blog de cuisine! Aujourd'hui, nous allons vous présenter une recette de gâteau incroyablement délicieuse appelée hwygowerhsdf. Ce nom peut sembler étrange, mais une fois que vous aurez goûté ce gâteau, vous comprendrez pourquoi il est devenu notre préféré. Cette recette est inspirée du blog Rainbow Plant Life et est végétalienne, sans gluten et sans sucre raffiné.</p>
      <div itemscope itemtype="https://schema.org/Recipe">
      <h2 itemprop="name">Gâteau hwygowerhsdf</h2>
  
      <div itemprop="image" itemscope itemtype="https://schema.org/ImageObject">
        <img src="https://www.justonecookbook.com/wp-content/uploads/2021/07/Matcha-Gateau-au-Chocolat-9832-II.jpg" alt="hwygowerhsdf" />
        <meta itemprop="url" content="https://www.justonecookbook.com/wp-content/uploads/2021/07/Matcha-Gateau-au-Chocolat-9832-II.jpg" />
        <meta itemprop="width" content="500" />
        <meta itemprop="height" content="500" />
      </div>
      
      <h3>Ingrédients</h3>
      <ul>
        <li><span itemprop="recipeIngredient">2 tasses de farine d'amande</span></li>
        <li><span itemprop="recipeIngredient">1 tasse de farine de noix de coco</span></li>
        <li><span itemprop="recipeIngredient">1/2 tasse de farine de sarrasin</span></li>
        <li><span itemprop="recipeIngredient">1/2 tasse de fécule de tapioca</span></li>
        <li><span itemprop="recipeIngredient">1 cuillère à soupe de poudre à pâte</span></li>
        <li><span itemprop="recipeIngredient">1/2 cuillère à café de bicarbonate de soude</span></li>
        <li><span itemprop="recipeIngredient">1/2 cuillère à café de sel</span></li>
        <li><span itemprop="recipeIngredient">1 tasse de lait d'amande non sucré</span></li>
        <li><span itemprop="recipeIngredient">1/2 tasse de sirop d'érable</span></li>
        <li><span itemprop="recipeIngredient">1/2 tasse d'huile de coco fondue</span></li>
        <li><span itemprop="recipeIngredient">1 cuillère à soupe de vinaigre de cidre de pomme</span></li>
        <li><span itemprop="recipeIngredient">1 cuillère à soupe d'extrait de vanille</span></li>
        <li><span itemprop="recipeIngredient">2 cuillères à soupe de pâte de matcha</span></li>
        <li><span itemprop="recipeIngredient">1 cuillère à soupe de jus de citron frais</span></li>
        <li><span itemprop="recipeIngredient">1 cuillère à soupe de zeste de citron</span></li>
        <li><span itemprop="recipeIngredient">1/2 tasse de noix de coco râpée non sucrée</span></li>
      </ul>
      
      <h3>Instructions</h3>
      <ol>
        <li><span itemprop="recipeInstructions">Préchauffez le four à 180°C et graissez un moule à gâteau de 20 cm.</span></li>
        <li><span itemprop="recipeInstructions">Dans un grand bol, mélangez les farines d'amande, de noix de coco, de sarrasin, la fécule de tapioca, la poudre à pâte, le bicarbonate de soude et le sel.</span></li>
        <li><span itemprop="recipeInstructions">Dans un autre bol, mélangez le lait d'amande, le sirop d    érable, l'huile de coco fondue, le vinaigre de cidre de pomme, l'extrait de vanille, la pâte de matcha, le jus de citron frais et le zeste de citron.</span></li>
      <li><span itemprop="recipeInstructions">Ajoutez le mélange humide aux ingrédients secs et mélangez jusqu'à ce qu'ils soient bien combinés.</span></li>
      <li><span itemprop="recipeInstructions">Incorporez la noix de coco râpée dans la pâte.</span></li>
      <li><span itemprop="recipeInstructions">Versez la pâte dans le moule à gâteau graissé et lissez le dessus avec une spatule.</span></li>
      <li><span itemprop="recipeInstructions">Faites cuire le gâteau pendant 35 à 40 minutes, ou jusqu'à ce qu'un cure-dent inséré au centre en ressorte propre.</span></li>
      <li><span itemprop="recipeInstructions">Retirez le gâteau du four et laissez-le refroidir complètement dans le moule avant de le couper en tranches et de le servir.</span></li>
    </ol>
    
    <h3>Notes</h3>
    <ul>
      <li><span itemprop="recipeNote">Ce gâteau se conserve bien dans un conteneur hermétique à température ambiante pendant 3 à 4 jours.</span></li>
    </ul>
    
    <meta itemprop="cookTime" content="PT40M" />
    <meta itemprop="totalTime" content="PT1H15M" />
    <meta itemprop="recipeYield" content="8-10 parts" />
    <meta itemprop="nutrition" content="{
      '@type': 'NutritionInformation',
      'calories': '320 calories',
      'fatContent': '24g',
      'carbohydrateContent': '24g',
      'proteinContent': '4g'
    }" />
    
    <div itemprop="author" itemscope itemtype="https://schema.org/Person">
      <span itemprop="name">Ricardo Larrivée</span>
    </div>
  
  </div>


  </div>
  );
}
