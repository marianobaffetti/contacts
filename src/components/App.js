import React, { Component } from 'react';
import ContactsList from './ContactsList';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contactsInfo : [],
      loading: true
    }
  }

  render() {
    if (this.state.loading){
      return 'loading...'
    } else {
      return (
        <ContactsList contactsInfo = {this.state.contactsInfo} />
      );
    }
  }
  componentWillMount(){
     fetch('http://s3.amazonaws.com/technical-challenge/v3/contacts.json')  
     .then(response => response.json())
       .then(contacts =>{
           this.setState({ contactsInfo: contacts, loading: false }) ;
     })
   }
}
export default App;
