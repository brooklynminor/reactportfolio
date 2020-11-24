import React, { useEffect} from "react";
// import axios from 'axios';
import Card from "../components/Card";
//pictures in assets
import notetakerpic from '../assets/note-taker.jpg'
import weatherpic from '../assets/weather.jpg'
import quizpic from '../assets/quiz.jpg'
import jobpic from '../assets/find-a-job.jpg'
import chatterladderpic from '../assets/chatterladder.jpg'
import budgetpic from '../assets/budget.jpg'

//npm install axios and npm install react-axios ran on terminal

function Portfolio( props ) {
  // const [userlist, setuserlist] = useState([])

  useEffect(() => {
    console.log('use Effect!')
    // findusers()
  },[]);

  return (
    <div>
     <h2>Portfolio</h2>
      <div className="row-1">
        <div className="col-1">
          <Card
            name="Note Taker"
            titlecolor="red"
            cardimg={notetakerpic}
            dayissued="2020-10-19"
            cardtext=""
            github="https://github.com/brooklynminor/Note-Taker.git"
         />
        </div>
        <div className="col-2">
          <Card
            name="Weather App"
            titlecolor="green"
            cardimg={weatherpic}
            cardtext="A five day forcast."
            dayissued="2020-11-29"
            github="https://github.com/brooklynminor/Homework6-WeatherApp.git"

          />
        </div>
        <div className="col-3">
          <Card
            name="Quiz"
            titlecolor="yellow"
            cardtext="A short pop-quiz on the Brooklyn Bridge."
            cardimg={quizpic}
            dayissued="2020-09-23"
            github="https://github.com/brooklynminor/Quiz.git"

          />
        </div>
      </div>
      <div className="row-2">
        <div className="col-1">
          <Card
            name="Progressive Budget"
            titlecolor="yellow"
            cardtext="An app that tracks finacial costs."
            cardimg={budgetpic}
            dayissued="2020-11-11"
            github="https://github.com/brooklynminor/Progressive-Budget.git"

          />
        </div>
        <div className="col-2">
          <Card
            name="Job.R"
            titlecolor="yellow"
            cardtext="A website that renders
            job-listings and related novels."
            cardimg={jobpic}
            dayissued="2020-10-05"
            github="https://github.com/vicscherman/project1.git"

          />
        </div>
        <div className="col-3">
          <Card
            name="Chatter Ladder"
            titlecolor="yellow"
            cardtext="A chat app with a variety of chat rooms."
            cardimg={chatterladderpic}
            dayissued="2020-11-03"
            github="https://github.com/skar45/Project-2.git"

          />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;