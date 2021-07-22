import React from 'react';



const SearchBox = ()=>{
    return(
        <div className="widgets-searchbox">
        <form id="widgets-searchbox">
          <input className="input-field" type="text" placeholder="Search" />
          <button className="widgets-searchbox-btn" type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    )
}

export default SearchBox;