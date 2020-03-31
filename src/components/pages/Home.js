import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import { Jumbotron } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import bgimage from './backImage.jpg'

class Home extends Component {
  render() {
    return (
      
<section className="my-5 py-5">
<Image style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
  </Image>
        <div className="container">
        <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
        <h1 class="display-4 text-white">Hi I'm Zain</h1>
        <h3 class="text-white">Web Developer</h3>
          </Jumbotron>
 
           <div className="well well-sm">
             <h3>
               <strong>Education</strong>
             </h3>
           </div>
           <div class="card-group">
            <div class="card">
             <div class="card-body">
              <h5 class="card-title">Open Clasrooms</h5>
                <p class="card-text">Currently a student studying to become a full stack developer</p>

             </div>
            </div>
              <div class="card">
   
                <div class="card-body">
                  <h5 class="card-title">Wiagn and Leigh College</h5>
                    <p class="card-text">I completed a level 3 BTECH named Information and technology systems, which covered all the fundamentals of IT</p>
                    <p class="card-text"><small class="text-muted">Qualification Grade: D*D*D* </small></p>

                </div>
                </div>
              <div class="card">
   
                <div class="card-body">
                  <h5 class="card-title">Kemnal Technology College</h5>
                    <p class="card-text">This was my secondary school where i studied IT and Technology, which began my passion for computing</p>
                    
                </div>
 
              </div>

            </div>
            </div>
</section>  
    );
  }
}

export default Home;