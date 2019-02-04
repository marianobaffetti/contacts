import React, { Component } from 'react';
import trueStar from './img/FavoriteStarTrue/Favorite — True.png';
import falseStar from './img/FavoriteStarFalse/Favorite — False.png';

import 'bulma/css/bulma.css'

class ContactDetail extends Component {
  constructor(props){
    super(props);
    this.onBackToContactsClick = this.onBackToContactsClick.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
  }

  onStarClick(e){
    this.props.handleStarClick(e, this);
  }

  onBackToContactsClick(e){
      this.props.handleBackToContactsClick(e, this);
  }

  render() {
    const contactInfo = this.props.contactInfo;
    return (
        <div className="panel">
            <div className="panel-heading level is-mobile" >
            <div className="level-left" onClick= {this.onBackToContactsClick} >&lt; Contacts</div>
            <div className ="level-right" onClick= {this.onStarClick}>              
                <img src={contactInfo.isFavorite ? trueStar : falseStar} alt=" " />
            </div>
          </div>
                <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                <img src={contactInfo.largeImageURL} alt=" "/>
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt=" "/>
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
        </div>
    );
  }
}
export default ContactDetail;



