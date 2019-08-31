import React, { PureComponent } from 'react';


class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(err) {
    console.log('[' + this.constructor.name +'] err', err);
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('[error, errorInfo]', error, errorInfo);
  }

  render() {
    let content = this.props.children;

    if(this.state.hasError) {
      content = (
        <section>
          <h2>{this.constructor.name}</h2>
        </section>
      )
    }

    return content;
  }
}

export default ErrorBoundary;
