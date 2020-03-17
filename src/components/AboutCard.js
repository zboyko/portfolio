import React, { Component } from 'react';
import { InfoConsumer } from './context';
import { Link } from 'react-router-dom';

class AboutCard extends Component {
  render() {
    const { id, aboutTitle, aboutText } = this.props.item;
    return (
      <InfoConsumer>
        {value => (
          <div className="card container mt-2 mb-3 p-5">
            <div className="card-body">
              <h5 key={id} className="card-title">
                {aboutTitle}
              </h5>
              <p className="card-text">{aboutText}</p>
              <Link to="/" className="card-link">
                Read More >>
              </Link>
            </div>
          </div>
        )}
      </InfoConsumer>
    );
  }
}

export default AboutCard;