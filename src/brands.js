import React from 'react';


const Brands=(props)=>{
    return(
    <section className="div-stnd ">
        <h1 className="heading-logo">We are a global <br/> company <br/>
            with local culture
        </h1>
        <ul className="brands-logo">
            {props.brands.map((currentBrand)=>
            <li>
                <a className="svg-logo" href={currentBrand.link} target="_blank">
                    <svg width="140" height="25" viewBox="0 0 200 32">
                    <path d={currentBrand.path}></path>
                    </svg>
                </a> 
            </li>
            )}
        </ul>
    </section>
)}

export default Brands