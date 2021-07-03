import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { Button } from 'react-bootstrap';
import './RecipeList.css';

const RecipeList = ({ articles }) => {
  const [filter, setFilter] = useState('Allrecipes');

  function handleOnClick(event) {
    window.scrollTo(0, 0);
    setFilter(event.target.id);
    return;
  }
  return (
    <div>
      <div className="ButtonContainer">
        <Button
          onClick={handleOnClick}
          id="Breakfast"
          variant="light"
        >
          breakfast
        </Button>
        <Button
          onClick={handleOnClick}
          id="Lunch"
          variant="light"
        >
          lunch
        </Button>
        <Button
          onClick={handleOnClick}
          id="Dinner"
          variant="light"
        >
          dinner
        </Button>
        <Button
          onClick={handleOnClick}
          id="Allrecipes"
          variant="light"
        >
          all recipes
        </Button>
      </div>
      <div className="PostsContainer">
        {filter === 'Allrecipes'
          ? articles.map((article, index) => (
              <RecipeCard article={article} key={index} />
            ))
          : articles
              .filter((article) => article.fields.category === filter)
              .map((article, index) => (
                <RecipeCard article={article} key={index} />
              ))}
      </div>
    </div>
  );
};

export default RecipeList;
