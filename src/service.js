import React from 'react';
import './style.css';

const Service=(props)=>{

   return (
   <div className="div-stnd service">
    {props.cards.map((currentcard)=>
    <div className={currentcard.identity}>
        <p>{currentcard.title}</p>
        <h2>{currentcard.text}</h2>
        {!currentcard.select?null:(
            <select>
                <option>Choose country</option>
                {currentcard.select.map((currentselect)=>
                <option>{currentselect}</option>
                )}
            </select>
        )}
        <img className={currentcard.imgIdentity} src={currentcard.img} alt="card"></img>
    </div>
    )}
  </div>
  );
}
export default Service