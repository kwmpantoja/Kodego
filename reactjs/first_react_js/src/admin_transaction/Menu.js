import React from 'react';

function Menu({menus, name}) {
   
  return (
    <div>
         <h1>{name.toUpperCase()}</h1>
       <ul>
          {menus && 
             menus.map (menu =>{
              return <li key = {menu.key} >{menu.value}</li>;
          })}
       </ul>

    </div>
  );
}

export default Menu;
