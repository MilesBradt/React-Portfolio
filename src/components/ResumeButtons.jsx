import React from 'react';
import Resume from "./Resume";
import styles from "../css/global.css";

class ResumeButtons extends React.Component {

    constructor() {
        super()
        this.state = {
            isHidden: false
        }
    }
    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })
    }

    render() {
        let button;
        
        if (this.state.isHidden) {
            button = <button class='header-button' onClick={() => this.toggleHidden()}>Hide Resume</button>
        } else {
            button = <button class='header-button' onClick={() => this.toggleHidden()}>Show Resume</button>
        }

        return (
            <div>
                <style jsx>{styles}</style>
                {button}
                <div id='resume-div'>
                    {
                        this.state.isHidden ?
                        <Resume></Resume>
                        :null
                    }
                </div>
            </div>
        )
    }
}

export default ResumeButtons;