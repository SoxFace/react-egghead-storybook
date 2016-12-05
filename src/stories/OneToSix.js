// VIDEO 1-6
import React from 'react';

// Can haz state
class App extends React.Component {
  constructor (){
    super();
    this.state = {
      txt: 'this is the state text'
    }
  }

  update(e) {
      this.setState({
        txt: e.target.value.toUpperCase()
      })
  }

  render(){
    return (
      <div>
        <h1>Hello World</h1>
        <Widget update={this.update.bind(this)} />
        <b>{this.state.txt}</b>
      </div>
    )
  }
}
//
// App.propTypes = {
//   txt: React.PropTypes.string,
//   cat: React.PropTypes.number.isRequired
// }

App.defaultProps = {
  txt: "this is the default text"
}
// Stateless component function
const Widget = (props) =>
  <input type="text" onChange={props.update}/>

export default App
