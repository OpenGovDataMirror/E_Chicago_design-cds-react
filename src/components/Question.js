import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';





const Question = ({ title, info ,url}) => {

    
  


  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button  className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}
      
      <ul>
<li><a href="#">Being Safe Online</a></li>
<li><a href="#">File an Innovation and Technology FOIA Request</a></li>
<li><a href="#">Hardware and Software Technology Standards</a></li>
<li><a href="#">Publications &amp; Reports</a></li>
</ul>
      
      
      </p>}
    </article>
  );
};

export default Question;
