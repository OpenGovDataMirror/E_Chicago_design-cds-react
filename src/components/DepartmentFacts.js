import React from 'react'

const DepartmentFacts = () => {
    return (
        <>
           <div className="card  mb-2">
        <div className="card-header"><i className="fas fa-info-circle" aria-hidden="true"></i>&nbsp;Department Facts</div>
        <div className="card-body">
          <h4 className="card-title">About Us:</h4>
			<ul className="no-bullets no-indent blue list-unstyled">
				<li className="thefacts-levelone"><a href="https://www.chicago.gov/content/city/en/depts/doit/auto_generated/doit_mission.html">Mission</a></li>
				<li className="thefacts-levelone"><a href="https://www.chicago.gov/content/city/en/depts/doit/auto_generated/doit_leadership.html">Leadership</a></li>
				<li className="thefacts-levelone"><a href="https://www.chicago.gov/content/city/en/depts/doit/auto_generated/doit_our_structure.html">Our Structure</a></li>

			</ul>
        </div>
      </div> 
        </>
    )
}

export default DepartmentFacts
