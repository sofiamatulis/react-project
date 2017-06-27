import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: ''};
  }
  render() {
    return (
      <div>
        <input
        value={this.state.term}
        onChange={event => this.setState({term: event.target.value })} />;
        Value of the input: {this.state.term}
      </div>
    );
  }
}

export default SearchBar;

// Arrow functions really clean it up

//only change state in the constructor function

//constructor for setup: initializing variables etc.

//  the biggest difference between the stateless functional and class components is how you manage state. When you use React.Component or React.createClass, you still have access to all the lifecycle methods and the internal state (this.state), so the expectation is that you'll manage state within the component. Functional components, on the other hand, just take an input (the props) and return an output (the html), so state needs to be managed elsewhere; you have to pass in any event handlers and application state that you need. Functional components are much easier to reason about, in my opinion, but they usually need to be paired with some state management library like redux. You can also use the two types together, using a stateful component to manage state and passing that down to stateless child components.
