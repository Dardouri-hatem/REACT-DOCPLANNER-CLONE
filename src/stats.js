import React from 'react';


const SectionStats = (props)=>{
    return(
    <section className="screen">
     <div className="div-stnd container">
         <div className="header-div">
         <h3>
            The world's <br/>
            biggest healthcare platform
         </h3>
         <p>
            We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.
         </p>
         </div>
         <div className="container-items">
             
             {props.items.map((currentitem)=>
             <div id={currentitem.identity}>
             <img  srcset={currentitem.imgSrc} alt=""/>
             <h3>{currentitem.title}</h3>
             <p>
                 {currentitem.text}
             </p>
          </div>
             )}

         </div>
     </div>
     
    </section>
    
    );}

export default SectionStats