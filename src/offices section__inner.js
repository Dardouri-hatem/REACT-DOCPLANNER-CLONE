import React from 'react';


function ContainerImg(props){
    return <section className="div-stnd">
    <header className="offices-header middle">
        <h2>
				Improve the lives of millions.
				Change&nbsp;yours forever
		</h2>
        <p>
        More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.
        </p>
    </header>
    <div className="slid-img div-stnd">
        
            {props.imgs.map((img)=>
            <div className="img">
                <a href={img.link} class="office_inner">
                
                   <img  srcset={img.srcset} alt=""/>
                   <div class="caption-img">
                        {img.caption}
                       <span class="btn-small">See openings</span>
                   </div>
                </a>
                </div>
)}
        
       
    </div>
    </section>
}
export default ContainerImg