import React, { Component } from 'react';
import star from './img/star.png';
import 'bulma/css/bulma.css'

class ContactDetail extends Component {
  constructor(props){
    super(props);
  }

  
  render() {
    return (
      <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src={this.props.contact.largeImageURL} alt="Placeholder image"/>
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
    </div>
  </div>
</div>
     
    );
  }
}
export default ContactDetail;



