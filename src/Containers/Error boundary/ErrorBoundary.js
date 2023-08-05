import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hassError: false
        };

        
    }

    componentDidCatch() {
        this.setState({
            hassError: true
        });
    }

    render() {
        if (this.state.hassError) {
            return <h1>Error loading data</h1>
        }
        else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;