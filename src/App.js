// Video 14 iterate over dataset from API

import React from 'react'

class App extends React.Component {
  constructor(){
    super();
    this.state = {items: []}
  }
  componentWillMount(){
    // let nasa = 'https://api.nasa.gov/planetary/apod?api_key=g1gpfcZ5lvCxcZZ2RtgXZdmsz0hdehfTSQjdrydn'
    let starwars = 'http://swapi.co/api/people/?format=json'
    fetch( starwars )
      .then( response => response.json())
      .then( ({results:items}) => this.setState({items}))
  }
  filter(e) {
    this.setState({filter: e.target.value})
  }
  render(){
    let items = this.state.items
    if(this.state.filter) {
      items = items.filter( item =>
        item.name.toLowerCase()
        .includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)}/>
        {items.map(item =>
          <Person
            key={item.name}
            person={item} /> )}
      </div>
    )
  }
}

const Person = (props) => <h4>{props.person.name}</h4>

export default App

// // Video 13
//
// import React from 'react'
// import ReactDOM from 'react-dom'
//
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {increasing: false}
//   }
//   update(){
//     ReactDOM.render(
//       <App val={this.props.val + 1} />,
//       document.getElementById('root'))
//     }
//     componentWillReceiveProps(nextProps) {
//       this.setState({increasing: nextProps.val > this.props.val})
//     }
//     shouldComponentUpdate(nextProps, nextState){
//       return nextProps.val % 5 === 0;
//     }
//     render(){
//       return(
//         <button onClick={this.update.bind(this)}>
//           {this.props.val}
//         </button>
//       )
//     }
//     componentDidUpdate(prevProps, prevState) {
//       console.log(`prevprops: ${prevProps.val}`)
//     }
// }
//
// App.defaultProps = {val: 0}
//
// export default App

// // Video 11+12 counter, life cycle methods and state
//
// import React from 'react'
// import ReactDOM from 'react-dom'
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {val: 0}
//     this.update = this.update.bind(this)
//   }
//   update() {
//     this.setState({val: this.state.val + 1})
//   }
//   componentWillMount() {
//     console.log('componentWillMount')
//     this.setState({multiply: 2})
//   }
//   render() {
//     console.log('render');
//     return <button onClick={this.update}>{this.state.val * this.state.multiply}</button>
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//     this.inc = setInterval(this.update,500)
//   }
//   componentWillUnmount() {
//     console.log('componentWillUnmount')
//     clearInterval(this.inc)
//   }
// }
//
// // We export wrapper as the App is called within it
// class Wrapper extends React.Component {
//   mount(){
//     ReactDOM.render(<App />, document.getElementById('a'))
//   }
//   unmount(){
//     ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//   }
//   render(){
//     return(
//       <div>
//         <button onClick={this.mount.bind(this)}>Mount</button>
//         <button onClick={this.unmount.bind(this)}>Unmount</button>
//         <div id="a"></div>
//       </div>
//     )
//   }
// }
//
// export default Wrapper

// // Video 10 Refs
//
// import React from 'react'
// import reactDOM from 'react-dom'
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {a: ''}
//   }
//   update(e) {
//     this.setState({
//       a: this.a.refs.input.value,
//       b: this.refs.b.value
//     })
//   }
//   render() {
//     return (
//       <div>
//         <Input
//           ref={component => this.a = component}
//           update={this.update.bind(this)}
//         /> {this.state.a}
//         <hr/>
//           <input
//             ref = "b"
//             type="text"
//             onChange={this.update.bind(this)}
//           /> {this.state.b}
//       </div>
//     )
//   }
// }
//
// class Input extends React.Component {
//   render() {
//     return <div><input ref="input" type="text" onChange={this.props.update} /></div>
//   }
// }
//
// export default App

// // VIDEO 9 synthetic event system
// import React from 'react';
//
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {currentEvent: '---'}
//     this.update = this.update.bind(this)
//   }
//   update(e) {
//     this.setState({currentEvent: e.type})
//   }
//   render(){
//     return (
//       <div>
//         <textarea
//           onKeyPress={this.update}
//           onCopy={this.update}
//           onCut={this.update}
//           onPaste={this.update}
//           onFocus={this.update}
//           onBlur={this.update}
//           onDoubleClick={this.update}
//           onTouchStart={this.update}
//           onTouchMove={this.update}
//           onTouchEnd={this.update}
//           cols="30"
//           rows="10" />
//         <h1>{this.state.currentEvent}</h1>
//       </div>
//     )
//   }
// }
//
// export default App

// VIDEO 8 - validation and throwing errors
// import React from 'react';
//
// class App extends React.Component {
//   render(){
//     return <Title text="12345678" />
//   }
// }
//
// const Title = (props) => <h1>Title: {props.text}</h1>
//
// Title.propTypes = {
//   text(props, propName, component) {
//     if (!(propName in props)) {
//       return new Error(`missing ${propName}`)
//     }
//     if (props[propName].length < 6) {
//       return new Error(`too short ${propName}`)
//     }
//   }
// }
//
// export default App

// // VIDEO 7
//
// import React from 'react';
//
// class App extends React.Component {
//   render(){
//     return <Button>I <Heart /> React</Button>
//   }
// }
//
// // Stateless component
// const Button = (props) => <button>{props.children}</button>
//
// // Nested stateless components
// class Heart extends React.Component {
//   render() {
//     return <span>&hearts;</span>
//   }
// }
//
// export default App

// // VIDEO 1-6
// import React from 'react';
//
// // Can haz state
// class App extends React.Component {
//   constructor (){
//     super();
//     this.state = {
//       txt: 'this is the state text'
//     }
//   }
//
//   update(e) {
//       this.setState({
//         txt: e.target.value.toUpperCase()
//       })
//   }
//
//   render(){
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <Widget update={this.update.bind(this)} />
//         <b>{this.state.txt}</b>
//       </div>
//     )
//   }
// }
// //
// // App.propTypes = {
// //   txt: React.PropTypes.string,
// //   cat: React.PropTypes.number.isRequired
// // }
//
// App.defaultProps = {
//   txt: "this is the default text"
// }
// // Stateless component function
// const Widget = (props) =>
//   <input type="text" onChange={props.update}/>
//
// export default App
