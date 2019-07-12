import React, { Component } from 'react';

export default class InterchangeableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.defaultText
        }
        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle() {
        this.setState({
            title: this.props.changedText
        });
    }

    render() {
        return <div onClick={this.changeTitle}>{this.state.title}</div>;
    }

}

InterchangeableText.defaultProps = {
    defaultText: 'defaultText',
    changedText: 'changedText'
}