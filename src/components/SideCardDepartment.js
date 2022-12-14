import React from 'react'

const SideCardDepartment  = () => {
  return (
    <>
      
        <div className="card-header"><i className="fas fa-id-card" aria-hidden="true"></i>&nbsp;Department Main Office</div>
        <div className="card-body">
          <h4 className="card-title">Innovation and Technology</h4>
					<ul className="no-bullets no-indent list-unstyled">
						<li>
								Phone: 312.744.5844<br />
				
							<br />								
                                <a className="email " title="Contact Us" href="#" data-toggle="modal" data-target="#contactUsModal">Contact Us</a>                  
							   
						</li>
						
						<li>
							
								333 S. State Street
								<br />
							
							
								Suite 420<br />
							
							Chicago, IL 60604&nbsp;&nbsp;&nbsp;<br /><a  className="no-bullets " href="https://www.google.com/maps/dir/333+S.+State+Street%2C+Chicago%2C+IL%2C+60604" target="_blank" title="Get Directions">Get Directions</a>
						</li>
									 
					</ul>       
        </div>
     
    </>
  )
}

export default SideCardDepartment 
