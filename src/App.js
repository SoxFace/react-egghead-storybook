// Video 20 Sliders

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 100
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render(){
    return (
      <div>
        <NumInput ref="red"
          min={0}
          max={255}
          step={0}
          val={+this.state.red}
          label="Red - step by 1"
          update={this.update} />
        <br />
        <NumInput ref="green"
          min={0}
          max={255}
          step={5}
          val={+this.state.green}
          label="Green step by 5"
          update={this.update} />
        <br />
        <NumInput ref="blue"
          min={0}
          max={255}
          step={5}
          val={+this.state.blue}
          label="Blue start at 100"
          update={this.update} />
      </div>
    );
  }
}

class NumInput extends React.Component {
  render() {
    let label = this.props.label !== '' ?
      <label>{this.props.label} = {this.props.val}</label> : ''
    return(
      <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
          {label}
      </div>
    );
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 255,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default App

// // Video 19
//
// import React from 'react'
//
// class App extends React.Component {
//   render(){
//     return (
//       <Buttons>
//         <button value="A">A</button>
//         <button value="B">B</button>
//         <button value="C">C</button>
//       </Buttons>
//     )
//   }
// }
//
// class Buttons extends React.Component {
//   constructor(){
//     super();
//     this.state = {selected: 'None'}
//   }
//   selectItem(selected) {
//     this.setState({selected})
//   }
//   render(){
//     let fn = child => React.cloneElement(child, {
//         onClick: this.selectItem.bind(this, child.props.value)
//       })
//     let items = React.Children.map(this.props.children, fn);
//     return (
//       <div>
//         <h2>You have Selected: {this.state.selected} </h2>
//         {items}
//       </div>
//     )
//   }
// }
//
// export default App

// // Video 18 iterating in children in React
//
// import React from 'react'
//
// class App extends React.Component {
//   render() {
//     return (
//       <Parent>
//         <div className="childA"></div>
//         // <div className="childB"></div>
//       </Parent>
//     )
//   }
// }
//
// class Parent extends React.Component{
//   render(){
//     let items = React.Children.map(this.props.children, child => child)
//     console.log(items)
//     return null
//   }
// }
//
// // more methods
// // React.Children.forEach(this.props.children, child => console.log(this.props.className))
// //
// // React.Children.toArray(this.props.children)
// //
// // React.Children.only(this.props.children)
//
//
// export default App

// //  Video 16 Live Compiler
//
// import React from 'react';
// import './App.css';
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       input: '/* add your jsx here */',
//       output: '',
//       err: ''
//     }
//   }
//   update(e) {
//     let code = e.target.value;
//     try {
//       this.setState({
//         output: window.Babel
//         .transform(code, {presets: ['es2015', 'react']}).code,
//         err: ''
//       })
//     }
//     catch(err) {
//       this.setState({err: err.message})
//     }
//   }
//   render(){
//     return(
//       <div>
//         <header>{this.state.err}</header>
//         <div className="container">
//           <textarea
//             onChange={this.update.bind(this)}
//             defaultValue={this.state.input} />
//           <pre>
//             {this.state.output}
//           </pre>
//         </div>
//       </div>
//     )
//   }
// }
//
// export default App



// // Video 15 - higher order components
//
// import React from 'react';
//
// const HOC = (InnerComponent) => class extends React.Component{
//   constructor(){
//     super();
//     this.state = {count: 0}
//   }
//   update(){
//     this.setState({count: this.state.count + 1})
//   }
//   componentWillMount(){
//     console.log('HOC willmount')
//   }
//   render(){
//     return(
//       <InnerComponent
//         {...this.props}
//         {...this.state}
//         update={this.update.bind(this)}
//       />
//     )
//   }
// }
//
// class App extends React.Component {
//   render(){
//     return(
//       <div>
//         <Button>button</Button>
//         <hr/>
//         <LabelHOC>label</LabelHOC>
//       </div>
//     )
//   }
// }
//
// const Button = HOC((props) =>
//   <button onClick={props.update}>{props.children} - {props.count}</button>)
//
// class Label extends React.Component {
//   componentWillMount(){
//     console.log('Label willmount')
//   }
//   render(){
//     return(
//       <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
//     )
//   }
// }
//
// const LabelHOC = HOC(Label)
//
// export default App

// Video 14 iterate over dataset from API
//
// import React from 'react'
//
// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {items: []}
//   }
//   componentWillMount(){
//     // let nasa = 'https://api.nasa.gov/planetary/apod?api_key=g1gpfcZ5lvCxcZZ2RtgXZdmsz0hdehfTSQjdrydn'
//     let starwars = 'http://swapi.co/api/people/?format=json'
//     fetch( starwars )
//       .then( response => response.json())
//       .then( ({results:items}) => this.setState({items}))
//   }
//   filter(e) {
//     this.setState({filter: e.target.value})
//   }
//   render(){
//     let items = this.state.items
//     if(this.state.filter) {
//       items = items.filter( item =>
//         item.name.toLowerCase()
//         .includes(this.state.filter.toLowerCase()))
//     }
//     return (
//       <div>
//         <input type="text" onChange={this.filter.bind(this)}/>
//         {items.map(item =>
//           <Person
//             key={item.name}
//             person={item} /> )}
//       </div>
//     )
//   }
// }
//
// const Person = (props) => <h4>{props.person.name}</h4>
//
// export default App

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
