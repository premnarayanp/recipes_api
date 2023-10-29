import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../index';
import '../styles/navbar.css'
import {getRecipesByName,getRecipesByFirstLetter} from '../api/index'
import {addRecipesList} from '../actions/index'

 class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:"",
      oldSearch:""
    };
  }

  handleSearchClick = async() => {
    const { searchText,oldSearch } = this.state;
    if (!searchText) {
      this.setState({
        searchText: "search..",
      });
        return;
    }


    if (searchText ===oldSearch) {
        return;
    }

    this.setState({
      oldSearch :searchText,
    });

    console.log(searchText);
    const response= await getRecipesByName(searchText);

    if(response.success){
      this.props.store.dispatch(addRecipesList(response.recipes)) 
    } 
  };

  handleSearchChange = async(e) => {

    const {oldSearch } = this.state;
    let value=e.target.value
    this.setState({
      searchText: value,
    });


    let size = value.length;

    if (size ===0) {
        return;
    }
    const firstLetter = value.charAt(0);
    if (firstLetter === " " || firstLetter ===oldSearch) {
        return;
    }

    this.setState({
      oldSearch: firstLetter,
    });
  
    console.log(firstLetter);
    const response= await getRecipesByFirstLetter(firstLetter);

    if(response.success){
      this.props.store.dispatch(addRecipesList(response.recipes)) 
    } 
    
  };


  
  render() {
    return (
      <div className="nav">
       <Link to="/">
          <button className='menuButton'>Home</button>
       </Link>

       <div id="search-bar">
             <input type="search" id="search-input" placeholder="search......"
               value={this.state.searchText} onChange={this.handleSearchChange}
             />
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

class NavbarWrapper extends Component {
  render() {
    return (
      <StoreContext.Consumer>
        {(store) => <Navbar store={store} />}
      </StoreContext.Consumer>
    );
  }
}
export default NavbarWrapper;
