import React, { Component } from 'react';
import User from './components/User';
import './styles/App.scss';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          user: []
      };
  }

  componentDidMount() {
    const getUser = () => {
      fetch('https://api.github.com/users/ericNunnDev')
      .then(res => res.json())
      .catch(e => console.log(e))
    }
  }

  render() {
    return (
      <div className='App'>
        <User name={this.state.name} />
      </div>
    )
  }
}
export default App;
