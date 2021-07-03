import React from "react";
import './About.css';

const About = () => {
  return (
    <div className='aboutBody'>
    <h2>About</h2>
    <p>This recipe website was build as part of an academic exercise. The technologies used are: HTML, CSS, JavaScript, React, Bootstrap for React 5.0, Google Fonts, Contentful, Vercel.
         Here you can visit the <a href=' https://github.com/loremipsum-20/cookbook-2.0'>GitHub Repository.</a></p>
    <p>The developers team is:</p>
    <a className='devId' href="https://github.com/loremipsum-20"> <img
        src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'}
        alt="Github logo"
      />Janine </a>
    <a className='devId' href="https://github.com/Lenu3498"><img
        src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'}
        alt="Github logo"
      />Lena </a>
    <a className='devId' href="https://github.com/JuanPabloBaez"><img
        src={process.env.PUBLIC_URL + '/GitHub-Mark-32px.png'}
        alt="Github logo"
      />Juan Pablo </a>

      <p>All recipes and images are from <a href='https://www.skinnytaste.com/'>skinnytaste.com</a></p>
    </div>

  )
};
export default About;
