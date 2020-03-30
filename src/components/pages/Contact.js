import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron } from 'react-bootstrap';
import bgimage from './contactImage.jpg'



class Contact extends Component {
  render() {
    return (
      <section className="my-5 py-5">
        
       <div className="container">
       <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
       <h1 class="display-4 text-white">Want to get in touch?</h1>
       <h6 class="text-white">My Email is:<a href="mailto:zain.boyko13@gmail.com" class="linkborder"> zain.boyko13@gmail.com</a> </h6>
         </Jumbotron>

          <div className="well well-sm">
            <h3>
              <strong>Contact</strong>
            </h3>
          </div>

          <div className="row">
          
            <div className="col-md-5">
              
              <form>
                <div className="form-group">
                <label for="exampleFormControlInput1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                  <label for="exampleFormControlInput1">Message</label>            
                <textarea
                  className="form-control"
                  cols="30"
                  rows="3"
                  placeholder="Message"
                />
                <Link className="btn btn-outline-primary text-uppercase mt-1">
                  <i className="fa fa-paper-plane-o" aria-hidden="true" />
                  <i className="fab fa-telegram-plane" />
                  &nbsp;Send
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;