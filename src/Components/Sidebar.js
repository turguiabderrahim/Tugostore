import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar"  id="sidebar">
      <h2>CATEGORIES</h2>
      <ul>
        <li><a href="#">Sports & Leisure</a></li>
        <li><a href="#">Garden & Outdoor</a></li>
        <li><a href="#">Home, Kitchen & Office</a></li>
        <li><a href="#">Baby & Toys</a></li>
      </ul>
      
      {/* <h2>FAST DELIVERY</h2>
      <p>SHIPPED FROM</p> */}
      <ul>
        {/* <li><a href="#">Shipped from Morocco</a></li> */}
      </ul>
      
      <h2>PRICE ($)</h2>
      <input type="number" placeholder="Min" />
      <input type="number" placeholder="Max" />
      <button className='Button'>Search</button>
    </div>
  );
};

export default Sidebar;
