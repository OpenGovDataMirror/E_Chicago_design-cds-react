import React from 'react'

const Site_Seal = () => {
  return (
    <>
      <div className='site-trust-seal'>
        <div className='trust-seal-link container'>
          <div className='row'>
            <div
              className='col ml-2 trust-seal-link-container'
              data-toggle='collapse'
              data-target='#trust-seal-content'
              role='button'
              aria-expanded='false'
              aria-controls='trust-seal-content'
            >
              <img
                src='https://webapps1.chicago.gov/cdn/chiwds/0.9.3/img/safari-pinned-tab.svg'
                className='trust-seal-flag'
                title='Flag'
              />
              <div>
                <span>An official website of the City of Chicago</span>
                <button
                  className='trust-seal-action'
                  title='Here’s how you know'
                  data-target='#trust-seal-content'
                  role='button'
                  data-toggle='collapse'
                  aria-expanded='false'
                  aria-controls='trust-seal-content'
                >
                  <span>Here’s how you know</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className='trust-seal-content collapse container mt-4'
          aria-hidden='true'
          id='trust-seal-content'
        >
          <div className='row'>
            <div className='col-sm-6'>
              <div className='media'>
                <img
                  className='mr-3 trust-seal-icon'
                  src='https://webapps1.chicago.gov/cdn/chiwds/0.9.3/img/icon-dot-gov.svg'
                  alt='Generic placeholder image'
                />
                <div className='media-body'>
                  <h5 className='mt-0'>The .gov means it’s official.</h5>
                  Municipal government websites often end in .gov or .org.
                  Before sharing sensitive information, make sure you’re on a
                  City of Chicago government site.
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='media'>
                <img
                  className='mr-3 trust-seal-icon'
                  src='https://webapps1.chicago.gov/cdn/chiwds/0.9.3/img/icon-https.svg'
                  alt='Generic placeholder image'
                />
                <div className='media-body'>
                  <h5 className='mt-0'>The site is secure.</h5>
                  The <strong>https://</strong> ensures that you are connecting
                  to the official website and that any information you provide
                  is encrypted and transmitted securely.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Site_Seal
