import { useState } from "react";
import "./App.css";
import data from "./assets/data.json";
import FirstStep from "./components/FirstStep";
import Display from "./components/Display";

function App() {
  // can we see the movie
  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  // map to go through movie info
  const movieList = [];
  const backgroundList = [];
  const actorsList = [];
  data.map((elem) => {
    movieList.push(elem.name);
    backgroundList.push(elem.background);
    actorsList.push(elem.actors);
  });
  console.log(movieList);
  return (
    <div className="app">
      <FirstStep
        movieList={movieList}
        // display1={display1}
        setDisplay1={setDisplay1}
        // display2={display2}
        setDisplay2={setDisplay2}
        // display3={display3}
        setDisplay3={setDisplay3}
      />
      <Display
        display1={display1}
        display2={display2}
        display3={display3}
        movieList={movieList}
        backgroundList={backgroundList}
        actorsList={actorsList}
      />
    </div>
  );
}

export default App;
