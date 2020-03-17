import React, { Component } from 'react';

import AboutCard from '../AboutCard';
import { InfoConsumer } from '../context';

class Home extends Component {
  render() {
    return (
      <InfoConsumer>
        {value => {
          return value.about.map(item => {
            return <AboutCard key={item.id} item={item} />;
          });
        }}
      </InfoConsumer>
    );
  }
}

export default Home;