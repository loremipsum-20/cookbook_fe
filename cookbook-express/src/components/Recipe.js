import React from 'react';
import marked from 'marked';
import { useParams } from 'react-router-dom';
import './Recipe.css';

const Recipe = ({ articles }) => {
  window.scrollTo(0, 0);
  const { recipeName } = useParams();
  let myRecipe;
  articles &&
    articles.map((article) => {
      if (article.fields.slug === recipeName) {
        myRecipe = article.fields;
        return myRecipe;
      } return null
    });

  const {
    name,
    featuredImage,
    shortDescription,
    description,
    ingredientsList,
    time,
    category,
  } = myRecipe;
  console.log(myRecipe.slug);
  const postDescription = marked(description);
  const recipeIngredients = marked(ingredientsList);
  return (
    <div>
      <div className="RecipeIntroduction">
        <p>{category}</p>
        <h2>{myRecipe.name} </h2>
        <p>{time} Minutes</p>
        <p>{shortDescription}</p>
      </div>
      <div className="Recipe">
        <div className="RecipeImgContainer">
          {' '}
          {featuredImage && (
            <img
              src={featuredImage.fields.file.url}
              alt={name}
              title={name}
              width="400"
            />
          )}
        </div>
        <div className="RecipeInstructions">
          <section
            dangerouslySetInnerHTML={{ __html: recipeIngredients }}
          />
          <section
            dangerouslySetInnerHTML={{ __html: postDescription }}
          />
        </div>
      </div>
    </div>
  );
};

export default Recipe;
