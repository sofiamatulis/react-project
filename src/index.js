// Create a new component. This component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM).

//  const is declaring a variable that is the final value (constant -- it will never be reassigned)

// babel and webpack translate jsx to vanilla javascript that can be understood by the browser
// jsx is what produces the actual html when you render the component
// can ultimately produce html

// Silent . Code that is declared in other files hasnt access to other files, unless we explicitely say it


import React from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  return <div> Hi! </div>;
}

// instantiate the component, before you pass it to the DOM
// App is a class, <App> is an instance of the class
// target container is where youll render it, the 2nd argument
ReactDOM.render(<App />, document.querySelector('.container'));
