import React from 'react'
import seal from '../city_seal_clr.png'

const Footer = () => {
  return (
    <>
      <footer className='mt-4'>
        <div className='footer-primary'>
          <div className='footer-primary-nav container' role='navigation'>
            <a
              href='http://www.cityofchicago.org/city/en.html'
              title="The City of Chicago's Official Site"
            >
              Home
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/disclaimer.html'>
              Disclaimer
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/privacy.html'>
              Privacy Policy
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/standards.html'>
              Web Standards
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/credits.html'>
              Site Credits
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/sitemap.html'>
              Site Map
            </a>
            <a href='http://www.cityofchicago.org/city/en/general/contact.html'>
              Contact Us
            </a>
            <a href='http://www.cityofchicago.org/content/city/en/depts/mayor/press_room.html'>
              Press Room
            </a>
            <a
              target='blank'
              title='Website Feedback'
              href='https://www.surveymonkey.com/r/cocwebsitesurvey'
            >
              Website Feedback
            </a>
          </div>
        </div>
        <div className='footer-main'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='media footer-media'>
                  <img
                    className='align-self-center mr-3'
                    src={seal}
                    alt='City of Chicago'
                  />
                  <div className='media-body align-self-center'>
                    <h3 className='mt-0'>City of Chicago</h3>
                    <small>Copyright &#169; 2010 - 2020 City of Chicago</small>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='footer-main-right'>
                  <div className='footer-social-links'>
                    <a
                      href='https://www.facebook.com/ChicagoMayorsOffice'
                      target='_blank'
                    >
                      <i className='fab fa-facebook'></i>
                    </a>
                    <a href='https://twitter.com/chicagosmayor' target='_blank'>
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      href='https://www.youtube.com/user/cityofchicagotv'
                      target='_blank'
                    >
                      <i className='fab fa-youtube'></i>
                    </a>
                  </div>

                  <div className='footer-contact'>
                    <h4>Contact Info</h4>
                  </div>
                  <div className='footer-contact-links'>
                    <a href='#'>info@chicago.gov</a>
                    <a href='tel:312.744.5000'>(312)-744-5000</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
