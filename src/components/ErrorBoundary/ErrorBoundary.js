import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      error: false
    };
  }

  componentDidCatch(error, info) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      // Fallback UI
      return (
        <h1>
          Oppss !! Weather has effected weather mann, your friend will be back
          after medication !
        </h1>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
