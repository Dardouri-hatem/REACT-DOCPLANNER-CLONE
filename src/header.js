import React from 'react';
import './style.css';

function NavBar(props){
let listhtml=[];
listhtml=props.items.map((currentitem)=>
<li className="item-nav"><a href={currentitem.link}>{currentitem.title}</a>
{!currentitem.dropContent?null :(
    <ul className="drop-down">
       {currentitem.dropContent.map((currentContent)=>
            <li><a href={currentContent.link}>{currentContent.title}</a></li>
       )}
    </ul>
)}
</li>

)
return<header className="header-nav"> <img width="268px" height="33px" class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"></img>
               <ul className="list-nav">{listhtml}</ul>
      </header> 
}
export default NavBar