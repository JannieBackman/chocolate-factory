import React, { ErrorInfo, ReactNode } from "react";
import error from "../assets/error.jpg";

interface State {
  hasError: boolean;
}

interface Props {
  children: ReactNode;
}

// Errorboundary
class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ width: "100vw" }}>
          <img src={error} alt="Error404" width={"100%"} />
        </div>
      );
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
