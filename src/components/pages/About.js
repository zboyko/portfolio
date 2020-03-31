import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import Info from '../Info';
import { Jumbotron } from '../Jumbotron';

class About extends Component {
  render() {
    return (
      <div className="container">
        <h3 class="display-4 text-center">Take a look at some of the projects i have been doing</h3>
        <div className="row mt-5">
        
          <InfoConsumer>
            {value => {
              return value.info.map(item => {
                return <Info key={item.id} item={item} />;
              });
            }}
          </InfoConsumer>
        </div>
      </div>
    );
  }
}

export default About;