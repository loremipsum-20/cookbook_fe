import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './RecipeCard.css';
import { Link } from 'react-router-dom';

const RecipeCard = ({ article }) => {
  const { name, featuredImage, shortDescription, slug } =
    article.fields;
  return (
    <Card className="CardBox">
      <Card.Img
        variant="top"
        src={featuredImage.fields.file.url}
        alt={name}
        title={name}
      />
      <Card.Body className="CardBody">
        <Card.Title className="CardTitle">{name}</Card.Title>
        <Card.Text className="CardText">{shortDescription}</Card.Text>
        <Link to={`/${slug}`}>
          <Button variant="outline-secondary" className="CardButton">Cook me</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default RecipeCard;
