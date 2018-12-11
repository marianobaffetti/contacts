import React, { Component } from 'react';
import Contact from './Contact';
import ContactDetail from './ContactDetail';

class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.handleContactClick = this.handleContactClick.bind(this);

    this.state= {
      selectedContactId: null,
      contactsInfo: contactsInfo
    }
  }

  handleContactClick(e, contact){
    this.setState({
      selectedContactId: contact.props.id
    })
  }

  getList() {
    let favouriteContacts = [];
    let otherContacts = [];

    this.state.contactsInfo.map((c) =>{
      const contact = (
      <Contact 
        id = {c.id}
        key= {c.id}
        name={c.name}
        smallImageURL = {c.smallImageURL}
        companyName = {c.companyName}
        handleClick = {this.handleContactClick}
      />);
      c.isFavorite ? favouriteContacts.push(contact) : otherContacts.push(contact);
    });
    return (
      <div className ="panel">
        <h3 class="panel-heading">
          Contacts
        </h3>
        <div className="panel">
          <p class="panel-heading">
            Favourites contacts
          </p>
          {favouriteContacts}
        </div>
        <div className="panel">
          <p class="panel-heading">
            Other contacts
          </p>
          {otherContacts}
        </div>
      </div>
    );
  }

  getDetail(){
    const contact = contactsInfo.find((c) => {
      return c.id == this.state.selectedContactId;
    },this);
    var pepe = contact;
    return(
      <ContactDetail contact={contact}/>
    );
  }

  render() {
    if (this.state.selectedContactId === null) {
      return(
        this.getList()
      );
    } else {
      return(
        this.getDetail()
      );
    }
  }
}

const contactsInfo = [
  {
      "name": "Miss Piggy",
      "id": "13",
      "companyName": "Muppets, Baby",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/miss-piggy-large.jpg",
      "emailAddress": "Miss.Piggy@muppetsbaby.com",
      "birthdate": "1987-05-11",
      "phone": {
          "work": "602-225-9543",
          "home": "602-225-9188",
          "mobile": ""
      },
      "address": {
          "street": "3530 E Washington St",
          "city": "Phoenix",
          "state": "AZ",
          "country": "US",
          "zipCode": "85034"
      }
  },
  {
      "name": "Winnie-the-Pooh",
      "id": "19",
      "companyName": "Honey Bear, Inc",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/winnie-the-pooh-large.jpg",
      "emailAddress": "Winnie.the.Pooh@honeybearinc.com",
      "birthdate": "1988-07-24",
      "phone": {
          "home": "808-949-8253"
      },
      "address": {
          "street": "933 Wiliwili St",
          "city": "Honolulu",
          "state": "HI",
          "country": "US",
          "zipCode": "96826"
      }
  },
  {
      "name": "Charlie Brown",
      "id": "1",
      "companyName": "Peanuts",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/charlie-brown-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/charlie-brown-large.jpg",
      "emailAddress": "Charlie.Brown@peanuts.com",
      "birthdate": "1980-12-04",
      "phone": {
          "work": "907-345-0962",
          "home": "907-345-1215",
          "mobile": "650-345-1220"
      },
      "address": {
          "street": "815 S Glendora Ave",
          "city": "Los Angeles",
          "state": "CA",
          "country": "US",
          "zipCode": "91790"
      }
  },
  {
      "name": "Pink Ranger",
      "id": "15",
      "companyName": "Power Rangers",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/pink-ranger-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/pink-ranger-large.jpg",
      "emailAddress": "Pink.Ranger@powerrangers.com",
      "birthdate": "1982-03-31",
      "phone": {
          "work": "916-372-5031",
          "home": "916-391-1816",
          "mobile": "771-881-8381"
      },
      "address": {
          "street": "1700 Terminal St.",
          "city": "West Sacramento",
          "state": "CA",
          "country": "US",
          "zipCode": "95691"
      }
  },
  {
      "name": "Elmer Fudd",
      "id": "3",
      "companyName": "",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/elmer-fudd-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/elmer-fudd-large.jpg",
      "emailAddress": "Elmer.Fudd@wabbithunters.com",
      "birthdate": "1950-07-20",
      "phone": {
          "home": "732-442-5218",
          "mobile": "732-442-5220"
      },
      "address": {
          "street": "1650 S Harbor Blvd",
          "city": "Anaheim",
          "state": "CA",
          "country": "US",
          "zipCode": "92802"
      }
  },
  {
      "name": "Harry Potter",
      "id": "4",
      "companyName": null,
      "isFavorite": true,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/harry-potter-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/harry-potter-large.jpg",
      "emailAddress": "Harry.Potter@gryffindor.edu",
      "birthdate": "1980-07-31",
      "phone": {
          "work": "808-836-8966",
          "home": "808-836-6008"
      },
      "address": {
          "street": "641 W Lake St",
          "city": "Chicago",
          "state": "IL",
          "country": "US",
          "zipCode": "60661"
      }
  },
  {
      "name": "Homer Simpson",
      "id": "6",
      "companyName": "Springfield Nuclear Power Plant",
      "isFavorite": true,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/homer-simpson-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/homer-simpson-large.jpg",
      "emailAddress": "Homer.Simpson@springfieldnukes.com",
      "birthdate": "1972-10-11",
      "phone": {
          "work": "602-953-2753",
          "home": "602-953-0355",
          "mobile": "602-953-5503"
      },
      "address": {
          "street": "343 Bush St Se",
          "city": "Salem",
          "state": "OR",
          "country": "US",
          "zipCode": "97302"
      }
  },
  {
      "name": "Jack Skellington",
      "id": "12",
      "companyName": "Halloween Town",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/jack-skellington-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/jack-skellington-large.jpg",
      "emailAddress": "Jack@halloweentown.com",
      "birthdate": "1977-02-01",
      "phone": {
          "work": "915-593-2344",
          "home": "915-829-1981"
      },
      "address": {
          "street": "7210 Gateway Blvd E",
          "city": "EL Paso",
          "state": "TX",
          "country": "US",
          "zipCode": "61111"
      }
  },
  {
      "name": "Bugs Bunny",
      "id": "0",
      "companyName": "Looney Tunes",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/bugs-bunny-small.png",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/bugs-bunny-large.png",
      "emailAddress": "Bugs.Bunny@looneytunes.com",
      "birthdate": "1975-01-20",
      "phone": {
          "home": "602-252-4009"
      },
      "address": {
          "street": "28 W 27th St",
          "city": "New York",
          "state": "NY",
          "country": "US",
          "zipCode": "10001"
      }
  },
  {
      "name": "JP Sullivan",
      "id": "8",
      "companyName": "Monsters Inc",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/jp-sullivan-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/jp-sullivan-large.jpg",
      "emailAddress": "JP.Sullivan@monstersinc.com",
      "birthdate": "1991-01-28",
      "phone": {
          "work": "626-960-6738",
          "home": "626-960-1503",
          "mobile": "626-960-1550"
      },
      "address": {
          "street": "2202 S Central Ave",
          "city": "Phoenix",
          "state": "AZ",
          "country": "US",
          "zipCode": "85004"
      }
  },
  {
      "name": "Kermit the Frog",
      "id": "9",
      "companyName": "Muppets, Baby",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/kermit-the-frog-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/kermit-the-frog-large.jpg",
      "emailAddress": "kermit@muppets.com",
      "birthdate": "1995-12-25",
      "phone": {
          "work": "212-719-3952",
          "home": "212-719-0754",
          "mobile": "212-719-2344"
      },
      "address": {
          "street": "111 W 40th St",
          "city": "New York",
          "state": "NY",
          "country": "US",
          "zipCode": "10018"
      }
  },
  {
      "name": "Leia Skywalker",
      "id": "10",
      "companyName": "Rebel Alliance",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/leia-skywalker-small.jpeg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/leia-skywalker-large.jpeg",
      "emailAddress": "Leia.Skywalker@rebelalliance.com",
      "birthdate": "1993-06-06",
      "phone": {
          "work": "208-733-8306",
          "home": "208-733-8306",
          "mobile": "208-733-3476"
      },
      "address": {
          "street": "641 W Lake St",
          "city": "Chicago",
          "state": "IL",
          "country": "US",
          "zipCode": "60661"
      }
  },
  {
      "name": "Lucy Van Pelt",
      "id": "11",
      "companyName": "Peanuts",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/lucy-van-pelt-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/lucy-van-pelt-large.jpg",
      "emailAddress": "Lucy.Van.Pelt@peanuts.com",
      "birthdate": "1983-08-21",
      "phone": {
          "work": "815-877-4376",
          "home": "815-877-1191",
          "mobile": "208-733-3476"
      },
      "address": {
          "street": "2181 Harlem Rd",
          "city": "Loves Park",
          "state": "IL",
          "country": "US",
          "zipCode": "61111"
      }
  },
  {
      "name": "Nemo",
      "id": "14",
      "companyName": "Unemployed",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/nemo-small.jpeg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/nemo-large.jpeg",
      "emailAddress": "Nemo@unemployed.com",
      "birthdate": "1982-05-30",
      "phone": {
          "work": "916-372-5032",
          "home": "916-391-1817",
          "mobile": "916-918-9181"
      },
      "address": {
          "street": "1700 Terminal St.",
          "city": "West Sacramento",
          "state": "CA",
          "country": "US",
          "zipCode": "95691"
      }
  },
  {
      "name": "Daffy Duck",
      "id": "2",
      "companyName": "Acme Looniversity",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/daffy-duck-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/daffy-duck-large.jpg",
      "emailAddress": "Daffy.Duck@acme.edu",
      "birthdate": "1974-05-20",
      "phone": {
          "work": "212-889-5775",
          "mobile": "212-889-5780"
      },
      "address": {
          "street": "3131 N Nimitz Hwy  #-105",
          "city": "Honolulu",
          "state": "HI",
          "country": "US",
          "zipCode": "96819"
      }
  },
  {
      "name": "Roger Rabbit",
      "id": "16",
      "isFavorite": true,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/roger-rabbit-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/roger-rabbit-large.jpg",
      "emailAddress": "Roger.Rabbit@toontown.com",
      "birthdate": "1988-06-02",
      "phone": {
          "work": "212-227-3681"
      },
      "address": {
          "street": "15 Park Row",
          "city": "New York",
          "state": "NY",
          "country": "US",
          "zipCode": "10038"
      }
  },
  {
      "name": "Scooby Doo",
      "id": "17",
      "companyName": "Mystery Incorporated",
      "isFavorite": false,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/scooby-doo-small.jpeg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/scooby-doo-large.jpeg",
      "emailAddress": "Scooby.Doo@mysteryincorporated.com",
      "birthdate": "1920-08-19",
      "phone": {
          "mobile": "202-783-8287"
      },
      "address": {
          "street": "400 1st St Nw",
          "city": "Washington",
          "state": "DC",
          "country": "US",
          "zipCode": "10038"
      }
  },
  {
      "name": "Hermione Granger",
      "id": "5",
      "companyName": "Gryffindor",
      "isFavorite": true,
      "smallImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/hermione-granger-small.jpg",
      "largeImageURL": "https://s3.amazonaws.com/technical-challenge/v3/images/hermione-granger-large.jpg",
      "emailAddress": "Hermione.Granger@gryffindor.com",
      "birthdate": "1964-02-10",
      "phone": {
          "work": "815-467-1244",
          "home": "815-467-0487",
          "mobile": "815-467-5007"
      },
      "address": {
          "street": "641 W Lake St",
          "city": "Chicago",
          "state": "IL",
          "country": "US",
          "zipCode": "60661"
      }
  }
]

export default ContactsList;
