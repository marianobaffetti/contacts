import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ContactsList />
    );
  }
}

export default App;
