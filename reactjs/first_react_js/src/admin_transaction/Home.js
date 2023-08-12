import React from 'react';
import Menu from './Menu';

function Home() {

let myMenu = [
  {key : 1, value: 'Home'},
  {key : 2, value: 'About'},
  {key : 3, value: 'Contact'},
];

 let anotherData = 'Home';

  return (
    <div>
       <Menu menus = {myMenu} name= {anotherData} />
       {/* <h1>Home</h1> */}
       <div>
           <div>Hero</div>
           <div>Carousel</div>
       </div>
    </div>
  );
}

export default Home;
