import React from 'react';
import './AboutPage.css'


// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {

  return (
    <div className="container">
      <div>
        <h3>Tools and Technology used:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Sagas</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
          <li>Cloudinary</li>
        </ul>
      </div>
      <h3>Thanks</h3>
      <ul>
        <li> Thanks to my family & friends </li>
        <li> my instructors and mentors </li>
        <li> Prime Digital Academy </li>
        <li> Special thanks to our amazing instructor, Chris Black, for all that he's done for us!! </li>
        <li> My wonderful Cohort </li>
        <li> And my dog Cookie for reminding me to take breaks! </li>
      </ul>
    </div>
  );
}

export default AboutPage;
