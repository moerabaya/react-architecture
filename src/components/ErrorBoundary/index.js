import React from "react";
/*
	* Note

	* Error boundaries do not catch errors for:

		-	Event handlers (learn more https://reactjs.org/docs/error-boundaries.html#how-about-event-handlers)
		-	Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
		-	Server side rendering
		-	Errors thrown in the error boundary itself (rather than its children)
*/
/*
	* A class component becomes an error boundary if it defines either (or both) of the lifecycle methods
		static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to 
		render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.
*/
export default class ErrorBoundary extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			error: null
		}
	}

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error({error, errorInfo});
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

