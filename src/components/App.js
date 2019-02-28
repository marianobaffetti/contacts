import React, { Component } from 'react';
import ContactsList from './ContactsList';
import contactsMock from '../apiMock';
import { connect } from 'react-redux';
import fetchData from '../actions/fetchData'
class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   // contactsInfo : contactsMock,
    //   loading: true
    // }
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
    this.props.fetch();
  }
}
  
  let mapStateToProps = (state) => {
    return {
      contacts: state.contacts,
      loading: state.loading
    }
  }
  
  let mapDispatchToProps = (dispatch) => {
    return {
      fetch: () => {
        dispatch(fetchData());
      }
    }
  }

  // componentWillMount(){
    //    fetch('http://s3.amazonaws.com/technical-challenge/v3/contacts.json')  
    //    .then(response => response.json())
    //      .then(contacts =>{
  //          this.setState({ contactsInfo: contacts, loading: false }) ;
  //    })
  //  }

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
