// VIDEO 7

import React from 'react';

class App extends React.Component {
  render(){
    return <Button>I <Heart /> React</Button>
  }
}

// Stateless component
const Button = (props) => <button>{props.children}</button>

// Nested stateless components
class Heart extends React.Component {
  render() {
    return <span>&hearts;</span>
  }
}

export default App
