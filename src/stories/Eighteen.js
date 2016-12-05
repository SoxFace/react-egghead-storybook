// Video 18 iterating in children in React

import React from 'react'

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA"></div>
        <div className="childB"></div>
      </Parent>
    )
  }
}

class Parent extends React.Component{
  render(){
    let items = React.Children.map(this.props.children, child => child)
    console.log(items)
    return null
  }
}

// more methods
// React.Children.forEach(this.props.children, child => console.log(this.props.className))
//
// React.Children.toArray(this.props.children)
//
// React.Children.only(this.props.children)


export default App
