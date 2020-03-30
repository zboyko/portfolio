
import React, { Component } from 'react';
import { InfoConsumer } from '../context';
import styled from 'styled-components';


class Projects extends Component {
  render() {
    return (
      <InfoConsumer>
        {data => {
          const {
            id,
            headerTitle,
            headerSubTitle,
            headerText,
            img,
            title,           
            description
          } = data.detailInfo;

          return (
            <React.Fragment>
              <HeaderProjects className="conteiner-fluid align-items-center">
                <h4 className="display-4 font-weight-bold">{headerTitle}</h4>
                <h3 className="display-5">{headerSubTitle}</h3>
                
                {/* Social Icons */}
                <div className="container mt-5">
                  <div className="row justify-content-center">
                    <div className="col-2">
                      <i className="fab fa-facebook-f" />
                    </div>
                    
                    <div className="col-2">
                      <i className="fab fa-google-plus-g" />
                    </div>
                    <div className="col-2">
                      <i className="fab fa-linkedin-in" />
                    </div>
                  </div>
                </div>
                
               
              </HeaderProjects>
           
               
                                
                {/* Tab Pane */}
                <div className="tab-content mb-5">
                  {/* About Place Tab */}
                  <div
                    id="aboutPlace"
                    className="tab-pane in active text-center mt-5"
                    role="tabpanel"
                  >
                    <h2 className="mb-3">{title}</h2>
                    <p>{description}</p>
                   <div className="container">             
                   <div className="tab-content mb-5"> <img
                      src={img}
                      alt={title}
                      className="img-thumbnail img-fluid"
                    /></div>
                  </div>
                 
                </div>
              </div>
             
            </React.Fragment>
          );
        }}
      </InfoConsumer>
    );
  }
}

export default Projects;

const HeaderProjects = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;
  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }
  h4 {
    color: var(--mainDark);
  }
  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }
  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }
  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
  .nav-item {
    height: 18.75rem;
  }
  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;