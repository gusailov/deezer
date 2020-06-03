import React from "react";
import CurrentlyCard from "./CurrentlyCard";
import Search from "./Search"
import Api from "./Api"




function App() {
 const forecast = Api().items
 const isLoaded = Api().isLoaded
 const error  = Api().error
  
    return (
    <div className="container">
      <Search></Search>
      <CurrentlyCard forecast={forecast} isLoaded={isLoaded} error={error} ></CurrentlyCard>
      
    </div>
  );
}

export default App;
