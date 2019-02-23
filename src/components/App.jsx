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
          height: 100% !important;
        }

        body {
          background-image: linear-gradient(#0F0F0F, #404040);
        }


          `}</style>
        <Navigation/>
        <Switch>
            <Route exact path='/' component={Header} />
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
        </Switch>
        <ParticleEffects/>

    </div>
    );
}

export default App;
