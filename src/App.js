import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from './components/SimpleAppBar';
import TabContainer from './components/TabContainer';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      users: [],
      store: []
    }
  }

  render() {
    return (
      
      <div>
        <SimpleAppBar/>
        <TabContainer/>
      </div>
    );
  }
}

export default App;
