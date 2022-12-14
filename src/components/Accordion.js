import React from 'react'

const Accordion = () => {
const mystyle = {
     
      color: "white"
    };


    return (
        <>
<section id="infoSection" className="my-2 " style={mystyle}>
    <div className="card mb-2">
        <div className="card-header bg-primary " id="headingInfowhatWeDo">
            <a href="#" className="accordion-toggle text-white collapsed" data-toggle="collapse" data-target="#infoWhatWeDo" aria-expanded="false" aria-controls="infoWhatWeDo">
                <h5 className="mb-0">What We Do</h5>
            </a>
        </div>
        <div id="infoWhatWeDo" className="collapse" aria-labelledby="headingInfowhatWeDo">
            <div className="card-body">
                <ul className="list-group list-related-info list-services">
                    <li className="list-group-item"><a href="#">Data Science</a></li>
                    <li className="list-group-item"><a href="#">Design</a></li>
                    <li className="list-group-item"><a href="#">Enterprise Applications</a></li>
                    <li className="list-group-item"><a href="#">Finance and Administration</a></li>
                    <li className="list-group-item"><a href="#">Geographic Information Systems (GIS)</a></li>
                    <li className="list-group-item"><a href="#">Information Security Office</a></li>
                    <li className="list-group-item"><a href="#">Planning, Policy &amp; Management</a></li>
                    <li className="list-group-item"><a href="#">Software Development</a></li>
                    <li className="list-group-item"><a href="#">Technical Operations</a></li>

                </ul>
            </div>
        </div>
    </div>
	
    <div className="card mb-2">
        <div className="card-header bg-primary" id="headingSuppInfo">
            <a href="#" className="accordion-toggle text-white collapsed" data-toggle="collapse" data-target="#infoSuppInfo" aria-expanded="false" aria-controls="infoSuppInfo">
                <h5 className="mb-0">Supporting Information</h5>
            </a>
        </div>
        <div id="infoSuppInfo" className="collapse" aria-labelledby="headingSuppInfo">
            <div className="card-body">
                <ul className="list-group list-related-info list-services">
                    <li className="list-group-item"><a href="#">Being Safe Online</a></li>
                    <li className="list-group-item"><a href="#">File an Innovation and Technology FOIA Request</a></li>
                    <li className="list-group-item"><a href="#">Hardware and Software Technology Standards</a></li>
                    <li className="list-group-item"><a href="#">Publications &amp; Reports</a></li>

                </ul>
            </div>
        </div>
    </div>	
	
</section>
        </>
    )
}

export default Accordion
