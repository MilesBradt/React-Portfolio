import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import { Switch, Route } from 'react-router-dom';
import ParticleEffects from './Particles';
import styles from '../css/global.css';

function App() {
    return (
    <div>
    <style jsx global>{styles}</style>
        <Navigation/>
        <ParticleEffects/>
        <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
        </Switch>

    </div>
    );
}

export default App;
