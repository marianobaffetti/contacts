import React, { Component } from 'react';
import star from './img/star.png';
import 'bulma/css/bulma.css'

class Contact extends Component {
  constructor(props){
    super(props);
    this.onContactClick = this.onContactClick.bind(this);
  }

  onContactClick(e) {
    this.props.handleClick(e,this);
  }
  render() {
    return (
      <div className="box" onClick= {this.onContactClick} value= {this.props.id}>
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.smallImageURL} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content" >
              <p>
                <strong>{this.props.name}</strong>
                <br />
                {this.props.companyName}
            </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
     
    );
  }
}
export default Contact;



