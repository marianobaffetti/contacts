import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import star from './img/FavoriteStarTrue/Favorite — True.png';

class Contact extends Component {
  constructor(props){
    super(props);
    this.onContactClick = this.onContactClick.bind(this);
  }

  onContactClick(e) {
    this.props.handleContactClick(e,this);
  }
  render() {
    const info = this.props.info;
    return (
      <div className="box is-marginless" onClick= {this.onContactClick} value= {info.id}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={info.smallImageURL} alt=" "/>
            </figure>
          </div>
          {info.isFavorite && <img src= {star} alt= " "/>}
          <div className="media-content">
            <div className="content">
              <p>
                <strong> {info.name}</strong>
                <br />
                {info.companyName}
            </p>
            </div>
          </div>
        </article>
      </div>
    );
  }
}
export default Contact;



