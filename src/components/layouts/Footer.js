import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">

            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get in touch with me on social media!</h6>
            </div>    
            {/* Footer icons */}   
              <div class="col-md-6 col-lg-7 text-center text-md-right">
                <button type="button" class="btn btn-fb text-white btn-outline-light"><i class="fab fa-facebook-f pr-1"></i> Facebook</button>
                <button type="button" class="btn btn-gplus text-white btn-outline-light"><i class="fab fa-google-plus-g pr-1"></i> Google +</button>
                <button type="button" class="btn btn-li text-white btn-outline-light"><i class="fab fa-linkedin-in pr-1"></i> Linkedin</button>
              </div>

          </div>
          {/* Footer Bottom */}
          
          <div class="footer-copyright text-center py-3">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} Zain Boyko's Portfolio - All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;