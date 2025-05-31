import React from 'react';
import { Button } from './components/ui/button';

class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error caught:', error);
    console.log('Error info:', errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-8 rounded-xl max-w-md w-full mx-4 text-center">
            <h2 className="text-2xl font-bold mb-4 text-pink-500">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {this.state.error?.message || "Don't worry! Let's try that again."}
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-400 hover:bg-blue-500 text-white py-3 rounded-xl"
            >
              Reload App
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default CustomErrorBoundary;