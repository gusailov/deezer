import React, { useState } from "react";

function Search (props) {
const [name , setName] = useState('')

const handleSubmit = (evt) => {
  evt.preventDefault();
   props.searchName(name)
   
   
   setName(" ");
   }
    return (
   <form onSubmit={handleSubmit} className="input-group mt-3 mb-5">
  <input type="text" className="form-control" placeholder="enter artist name" value={name} onChange={e => setName(e.target.value)}/>
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="submit" id="button-addon2" >Search</button>
  </div>
</form>
    )
}
export default Search;
