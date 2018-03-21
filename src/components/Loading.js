import React, { Component } from "react";
import PropTypes from "prop-types";

class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
  };

  static defaultProps = {
    text: "Loading",
    speed: 100
  };

  state = {
    text: this.props.text
  };

  componentDidMount() {
    const { text, speed } = this.props;
    // starts at this.state.text then adds "." until endpoint based on this.state.speed
    const endpoint = `${text}...`;
    // setState at each interval whether equals reached enpoint or not
    this.interval = window.setInterval(() => {
      text === endpoint
        ? this.setState(() => ({ text }))
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, speed);
  }

  // reset interval when Loading unmounts
  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <h2>{this.state.text}</h2>;
  }
}

export default Loading;
