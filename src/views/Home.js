import React from "react";
import Card from '../components/Card';

function Home(props) {
  return (
    <div>
      <h1>We are in the home component an it has a prop of {props.city}</h1>
      <div className="row">
        <div className="col">
          <Card
            name="Brooklyn Minor"
            titlecolor="red"
            cardtext="Web developer and Architectural Studies student with skills in coding and Autodesk BIM softwares. Certifications obtained from the University of Toronto in Leed Green Associate and Full Stack web development, as well as a diploma from George Brown College in Architectural Technology. Proficiency in JavaScript, CSS, HTML, and Node.js. As well as, Revit, AutoCad, InDesign, Illustrator, PhotoShoop. Fascinated by sustainable architecture and how the use of technologies can mitigate the volume of consumption and optimize a building's environment, and its occupants performance. With an aptitude in various programming languages and a passion for architectural studies, adopted with a hunger for knowledge, makes me a valuable asset to any team."
            cardimg="assets/img/profile-pic.jpeg"
          />
      </div>
    </div>
  </div>
  );
}

export default Home;