import React, { useState, useEffect } from "react";


function Search () {
const [name , setName] = useState('')

    return (
        <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="enter artist name" aria-label="enter artist name" aria-describedby="button-addon2"/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div>
</div>
    )
}
export default Search;
