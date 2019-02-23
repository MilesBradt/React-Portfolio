import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import About from "./About";
import Projects from "./Projects";
import { Switch, Route } from 'react-router-dom';
import ParticleEffects from './Particles'

function App() {
    return (
    <div>
    <style jsx global>{`
        body, html {
          height: 100%
        }

        body {
          background-image: linear-gradient( to top, #1A1D30, #0F0F0F);
        }
        `}</style>
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
