import React, { Component } from 'react';
import ContactsList from './ContactsList';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData'
class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    if (this.props.loading){
      return 'loading...'
    } else {
      return (
            <ContactsList contactsInfo = {this.props.contacts} />
        );
      
    }
  }

  componentWillMount() {
    fetch('http://s3.amazonaws.com/technical-challenge/v3/contacts.json')  
       .then(response => response.json())
         .then(contacts =>{
          this.props.fetch(contacts);
     })
  }
}
  
const mapStateToProps = (state) => {
  return {
    contacts: state.contacts,
    loading: state.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetch: (contacts) => {
      dispatch(fetchData(contacts));
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);