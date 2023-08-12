import React from 'react';
import Menu from './Menu';

function AboutUs() {
  let myMenu = [
    {key : 1, value: 'Home'},
    {key : 2, value: 'About'},
    {key : 3, value: 'Services'},
    {key : 4, value: 'Gallery'},
    {key : 5, value: 'Contact'},
  ];

  let anotherData = 'About Us';

  return (
    <div>
      <Menu menus = {myMenu} name= {anotherData}/>
      <section>
            <p>gdhjghjfghgfkhfhjfhj</p>
            <span>Hello</span>
            <p> About Us</p>
      </section>
    </div>
  );
}

export default AboutUs;

