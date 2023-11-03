import 'SearchResults.css'
import {React, useState} from "react"
function SearchResults(props) {
    const loginEvent = props.loginEvent
    const registerEvent = props.registerEvent
  return (
    <div className='popup_overlay'>
        <div className='popup_contents'>
            Search Results
        </div>
    </div>
  );
}

export default SearchResults;