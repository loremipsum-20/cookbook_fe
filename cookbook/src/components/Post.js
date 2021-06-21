import React from 'react';
import marked from 'marked';

const Post = ({ article }) => {
  console.log(article)
  const {name, featuredImage, description} = article.fields
  const postDescription = marked(description)
  return (
    <div>
      <h2>{name}</h2>
      {featuredImage && <img src={featuredImage.fields.file.url} alt={name} title={name} width='400'/>}
      <section dangerouslySetInnerHTML={{ __html: postDescription }} />
    </div>
  )
}

export default Post
