import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  
  render() {
    return (
      <div className="nav">
       <Link to="/">
          <button className='menuButton'>Home</button>
       </Link>

       <div id="search-bar">
             <input type="search" id="search-input" placeholder="search......"/>
            <button id="search-btn">search</button>
        </div>

        <Link to="/my-favorites">
          <button className='menuButton'>My Favorites</button>
       </Link>

       <div className='rounded-img-container'>
         <img src={require('../assets/myPhoto.jpg')} alt="user-pic" />
       </div>
       
      </div>
    );
  }
}

export default Navbar;
