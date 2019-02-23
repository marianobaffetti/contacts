import React, { Component } from 'react';
import Contact from './Contact';
import ContactDetail from './ContactDetail';

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.handleContactClick = this.handleContactClick.bind(this);
    this.handleBackToContactsClick = this.handleBackToContactsClick.bind(this);
    this.handleStarClick = this.handleStarClick.bind(this);
    this.state= {
      selectedContactId: null,
      contactsInfo: props.contactsInfo
    }
  }

  handleStarClick(e, contact){
    let contacts = this.state.contactsInfo.slice();
    const index = contacts.findIndex((c) => {
      return c.id === this.state.selectedContactId;
    },this);
    contacts[index].isFavorite = !contacts[index].isFavorite;
    this.setState({
      contactsInfo: contacts
    });
  }

  handleContactClick(e, contact){
    this.setState({
      selectedContactId: contact.props.info.id
    });
  }

  handleBackToContactsClick(e, backButton) {
    this.setState({
      selectedContactId: null
    });
  }

  getListView() {
    const contactsInfo = this.state.contactsInfo.slice();
    contactsInfo.sort((a, b) => {
      return (a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
    }); 

    const favouriteContacts = [];
    const otherContacts = [];
    contactsInfo.map((info) =>{
      const contact = (
      <Contact 
        info = {info}
        handleContactClick = {this.handleContactClick}
        key = {info.id}
      />);
      info.isFavorite ? favouriteContacts.push(contact) : otherContacts.push(contact);
    });

    return (
      <div className ="panel">
        <h3 className="panel-heading is-size-5 has-text-centered">
          Contacts
        </h3>
        <div className="panel is-marginless">
          <p className="panel-heading is-size-6">
            Favourites contacts
          </p>
          {favouriteContacts}
        </div>
        <div className="panel">
          <p className="panel-heading is-size-6">
            Other contacts
          </p>
          {otherContacts}
        </div>
      </div>
    );
  }

  getDetailView(){
    const contactInfo = this.state.contactsInfo.find((c) => {
      return c.id == this.state.selectedContactId;
    },this);
    return(
      <ContactDetail 
        contactInfo={contactInfo} 
        handleBackToContactsClick = {this.handleBackToContactsClick}
        handleStarClick = {this.handleStarClick}
      />
    );
  }

  render() {
    if (this.state.selectedContactId === null) {
      return(
        this.getListView()
      );
    } else {
      return(
        this.getDetailView()
      );
    }
  }
}
export default ContactsList;
