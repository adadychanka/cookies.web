import React, { Component } from "react";
import ErrorCard from "./ErrorCard";

class WidgetErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorCard mainText="Something went wrong" cardTitle="Woof... Woof... Woof..." />;
    }

    return this.props.children;
  }
}

export default WidgetErrorBoundary;
