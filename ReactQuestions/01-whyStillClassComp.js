/***
 * What would be reasons why to still use a Class component in React? 
 * 
 * Answer: 
 * Because there are 2 life cycles that are still only available in a class component
 * when you want to implement React Error Boundary
 *
 *  1. componentDidCatch()
 *  2. getDerivedStateFromError()
 * Refs: 
 * https://legacy.reactjs.org/docs/error-boundaries.html
 * https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 * https://dev.to/edemagbenyo/handle-errors-in-react-components-like-a-pro-l7l
 */

// componentDidCatch
// getDerivedStateFromError.


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}