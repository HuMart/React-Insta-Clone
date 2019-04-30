import React from 'react';
import './SearchBar.css'

const SearchBar = (props) => {
    return <div>
      <input 
      type='text' 
      placeholder='search' 
      onKeyDown={props.searchPost}
       />      
    </div>;
}
export default SearchBar;