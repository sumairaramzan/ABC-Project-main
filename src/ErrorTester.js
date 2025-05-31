import React from 'react';

class ErrorTester extends React.Component {
  state = { throwError: false };

  componentDidUpdate() {
    if (this.state.throwError) {
      throw new Error("Test Error");
    }
  }

  triggerError = () => {
    this.setState({ throwError: true });
  };

  render() {
    return this.props.children(this.triggerError);
  }
}

export default ErrorTester;