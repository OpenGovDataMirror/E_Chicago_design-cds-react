import React from 'react'

const CardItem = ({items}) => {
    
    const mystyle = {
      width: "100%",
      backgroundColor: "lightgray",
      textalign:"center"
    };
    return (
         <>
         <div className="col-xs-12">		
				<h3 className="list-header">Featured Services and Programs</h3>
                </div>
   
   <div   className="container-fluid featured-services">
		<div className="row">
			 <div className="col-xs-12">
				<div className="row flex-row">
   
                  {items.map((item)=>{
                    const{id,title,url,image}= item;
                    return(
       

                
					<div  className="col-6 col-sm-3 xcol">
                        <div key={id} className="thumbnail">

                            
							 <a href={url} target="_blank" alt="Image of a circle with the Chicago flag in it">  
								<img style={mystyle} src={image} title="Image of a circle with the Chicago flag in it" />               
							 </a>
							<div className="caption" >
								<h5 className="text-center"><a href={url} target="_blank" title={title} >{title}  </a></h5>
								<p className="text-center"> </p>
							</div>
						</div>
					</div>   
 
					
					
    


               )
            })}
               
               
          
				</div> 
			</div>
		</div>
	</div>  
               
       

        
    </>
    )
}

export default CardItem
