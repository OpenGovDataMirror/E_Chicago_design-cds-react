import React, { useState } from 'react';
import data from './data';
import Header from './components/Header'
import Footer from './components/Footer'
import Site_Seal from './components/Site_Seal'
import Breadcrumb from './components/Breadcrumb'
import SideCardDepartment  from './components/SideCardDepartment'
import DepartmentFacts  from './components/DepartmentFacts'
import Card  from './components/Card'
import CardItem  from './components/CardItem'
import Accordion from './components/Accordion'
import dataAcc from './dataAcc';
import SingleQuestion from './components/Question';



function App() {
  const[items,setItems] = useState(data)
  const [questions, setQuestions] = useState(dataAcc);

  
  return (
    <>
     
      <Site_Seal />
      <Header />
      
        
        
      <section class='cds-hero' style={{ 
      backgroundImage: `url("https://www.chicago.gov/content/dam/city/depts/doit/banners/2017/doit-main-banner.jpg")`, 
      backgroundPosition:"80%"
    }}>
        <div class='container'>
          <div class='cds-hero-callout'>
            <h1 class='cds-hero-heading'>
              <span class='text-white'>INNOVATION AND TECHNOLOGY</span>
            </h1>
            <p>
              AIS-BOIT's mission is to enhance delivery of City services through
              easy, reliable, cost-effective and secure access to information
              and to promote Chicago's advancement through technology.
            </p>
          </div>
        </div>
      </section>
      <main role="main" class="container">
      <Breadcrumb />
      
    <div class="row container">
      <div class="col-md-8">
        <div >
          <h2>INNOVATION AND TECHNOLOGY</h2>
          <p>
            The Department of Assets, Information and Services (AIS) supports the operations of other City Departments by providing high-quality
            and cost-effective services. Formerly
            the Department of Fleet and Facility Management (2FM), including the consolidation of the Department of Innovation and Technology (DoIT).
            The City's innovation and information technology organization.
            AIS-BOIT's mission is to enhance delivery of City services through easy,
            reliable, cost-effective and secure access to information and to
            promote Chicago's advancement through technology.


          </p>
          <hr />
          
        </div>
        <CardItem items={items}/>
        <div class="dept-full-description">
	
			<p>The Department of Innovation and Technology (DoIT) is the City of Chicago's central IT organization, providing a number of technology and telecommunication services to departments, the Mayor, Aldermen, residents, businesses, and tourists.</p>
<p>DoIT works with partners to realize Chicago's potential as a city where technology fuels opportunity, inclusion, engagement, and innovation for all by:</p>
<ul>
<li>Facilitating creative thought to improve&nbsp;existing&nbsp;City processes</li>
<li>Designing and implementing systems to power&nbsp;processes and services</li>
<li>Leveraging data to drive decision-making and improve City service delivery</li>
<li>Piloting and evaluating new technologies</li>
<li>Producing and contributing to&nbsp;<a title="open source projects" href="https://github.com/Chicago" target="_blank" rel="noopener noreferrer">open source projects</a>&nbsp;</li>
<li>Supporting <a title="public access to technology" href="/city/en/depts/doit/dataset/public_technologyresources.html">public access to technology</a> at City facilities</li>
<li>Building strategic partnerships</li>
<li><a href="/design-cds-bootstrap/department_sub_page.html">Hardware and Software Technology Standards</a></li>
</ul>
<Accordion/>

<section className="my-2">
  <div className="card mb-2">
        
          {questions.map((question) => {
            return (
              <div className="card-header" id="headingInfowhatWeDo">
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
              </div>
            );
          })}
          </div>
        </section>

</div>
      </div>
      
       <aside class="col-md-4 mb-2" >
        <div class="card mb-2"><SideCardDepartment /></div>
        <div ><DepartmentFacts /></div>
        
       </aside>
       
      </div>
      
      </main>
      <Footer />
    </>
  )
}

export default App
