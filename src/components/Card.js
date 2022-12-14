import React from 'react'

const Card = () => {

    const mystyle = {
      width: "100%",
      backgroundColor: "lightgray",
      
      textalign:"center"
    };
    return (
        <>
            
               
       <div className="container-fluid featured-services">
		<div className="row">
			<div className="col-xs-12">		
				<h3 className="list-header">Featured Services and Programs</h3> 
				<div className="row flex-row">


 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="https://data.cityofchicago.org/" target="_blank" alt="Image of a circle with the Chicago flag in it">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/data-portal-icon.png" title="Image of a circle with the Chicago flag in it" />               
							 </a>
							<div className="caption" >
								<h5 className="text-center"><a href="https://data.cityofchicago.org/" target="_blank" title="Image of a circle with the Chicago flag in it">Data Portal  </a></h5>
								<p className="text-center"> </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="http://techplan.cityofchicago.org/" target="_blank" alt="Chicago Technology Plan">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/tech-plan-icon.png" title="Chicago Technology Plan" />               
							 </a>
							<div className="caption" >
								<h5><a href="http://techplan.cityofchicago.org/" target="_blank" title="Chicago Technology Plan">Chicago Technology Plan  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="/contenthttps://www.chicago.gov/city/en/depts/doit/provdrs/gis.html" target="_self" alt="A stand with colorful arrows in different directions">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/map-gis-icon.png" title="A stand with colorful arrows in different directions" />               
							 </a>
							<div className="caption" >
								<h5><a href="/contenthttps://www.chicago.gov/city/en/depts/doit/provdrs/gis.html" target="_self" title="A stand with colorful arrows in different directions">Maps/GIS DATA  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="https://www.chicago.gov/city/en/depts/doit/dataset/public_technologyresources.html" target="_blank" alt="A computer monitor with circles around it">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/connect-chicago-icon.png" title="A computer monitor with circles around it" />               
							 </a>
							<div className="caption" >
								<h5><a href="https://www.chicago.gov/city/en/depts/doit/dataset/public_technologyresources.html" target="_blank" title="A computer monitor with circles around it">Connect Chicago  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="http://digital.cityofchicago.org/" target="_blank" alt="an image with a red star in a blue circle">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/digital-chicago-icon.png" title="an image with a red star in a blue circle" />               
							 </a>
							<div className="caption" >
								<h5><a href="http://digital.cityofchicago.org/" target="_blank" title="an image with a red star in a blue circle">Chicago Digital  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="https://www.chicago.gov/city/en/progs/tech.html" target="_self" alt="Information about Citywide Technology">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/info-technology-icon.png" title="Information about Citywide Technology" />               
							 </a>
							<div className="caption" >
								<h5><a href="https://www.chicago.gov/city/en/progs/tech.html" target="_self" title="Information about Citywide Technology">Information about Citywide Technology  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="www.chicago.gov/city/depts/doit/general/ChicagoHWSWStandards.pdf" target="_blank" alt="Hardware Software Standards">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/hardware-software-icon.png" title="Hardware Software Standards" />               
							 </a>
							<div className="caption" >
								<h5><a href="www.chicago.gov/city/depts/doit/general/ChicagoHWSWStandards.pdf" target="_blank" title="Hardware Software Standards">Hardware Software Standards  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
 
					
					<div className="col-6 col-sm-3 xcol">
                        <div className="thumbnail">
							 <a href="https://www.chicago.gov/city/en/depts/doit/supp_info/list_of_contractors.html" target="_self" alt="List of Contractors">  
								<img style={mystyle} src="https://www.chicago.gov/dam/city/depts/doit/ServiceIcons/contractors-list-icon.png" title="List of Contractors" />               
							 </a>
							<div className="caption" >
								<h5><a href="https://www.chicago.gov/city/en/depts/doit/supp_info/list_of_contractors.html" target="_self" title="List of Contractors">List of Contractors  </a></h5>
								<p > </p>
							</div>
						</div>
					</div>   
    
				</div> 
			</div>
		</div>
	</div>


        
    </>
    )
 }
export default Card
