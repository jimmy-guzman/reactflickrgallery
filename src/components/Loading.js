import React from "react";
import PropTypes from "prop-types";

class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
  };

  static defaultProps = {
    text: "Loading",
    speed: 50
  };

  state = {
    text: this.props.text
  };

  componentDidMount() {
    const { text, speed } = this.props;
    // starts at this.state.text then adds "." until stopper based on this.state.speed
    const stopper = `${text}...`;
    this.interval = window.setInterval(() => {
      text === stopper
        ? this.setState(() => ({ text }))
        : this.setState(prevState => ({ text: `${prevState.text}.` }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <h2>{this.state.text}</h2>;
  }
}

export default Loading;
