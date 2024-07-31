"use client";
import React, { ReactNode } from "react";
import { BsPlusLg } from "react-icons/bs";
import styles from "../styles/errorBoundary/_ErrorBoundary.module.scss";

interface ErrorBoundaryProps {
  fallback: string;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorMessage}>
          <div className={styles.iconError}>
            <BsPlusLg />
          </div>
          <h1 className={styles.message}>{this.props.fallback}</h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
