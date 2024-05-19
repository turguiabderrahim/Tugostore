import React, { useState } from 'react';
import './Header.css';

  

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };



  return (
    <div>
    <header className="header">
    
    <p className="custom-flex-container">
          Get free delivery on orders over $100
    </p>

      <div className="container">
        <h1 className="logo" id="logo">Tugo</h1>
        <nav className="nav"> 
            <a href="">New Fashion</a>
            {/* <a href="https://www.example.com/women-fashion">Women Fashion</a> */}
            {/* <a href="https://www.example.com/men-fashion">Men Fashion</a> */}
            {/* <a href="https://www.example.com/kids-fashion">Kids Fashion</a> */}
            <a href="https://www.example.com/accessories">Accessories</a>
            {/* <a href="https://www.example.com/shoes">Shoes</a> */}
            <a href="https://www.example.com/sale">Sale</a>
            <a href="https://www.example.com/new-arrivals">New Arrivals</a>
            <a href="https://www.example.com/seasonal">Seasonal</a>
            <a href="https://www.example.com/trending">Trending</a>
            {/* <div class="search-container">
            <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
          </div> */}
        </nav>
        
      </div>
    </header>

    </div>
  );
}

export default Header;
