import React from "react";
import Header from "./Header";
import About from "./Resume";
import Projects from "./Projects";
import { Switch, Route } from 'react-router-dom';
import ParticleEffects from './Particles';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '../css/global.css';

function App() {
  return (
    <div>
      <style jsx global>{styles}</style>
      <ParticleEffects />
      <div class='container' id='components-container'>
        <div class='row'>
          <Header />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
