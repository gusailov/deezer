import React, { useState,useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import Search from "./Search";
import useFetch from "./useFetch"
// import Api from "./Api"

function App() {
 const [name, setName] = useState('')

  const searchName = (name) => {
    setName (name)
  };
  console.log(name);

  const apiEndpoint = "https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem";
  const userFetchResponse = useFetch(apiEndpoint, {isLoading: true, data: null},name);
  console.log("userFetchResponse", userFetchResponse);
   
  return (

    <div className="container">
      <Search searchName={searchName}></Search>
      <CurrentlyCard items={userFetchResponse} isLoaded={userFetchResponse.isLoading}></CurrentlyCard>
      </div>
  );
}

export default App;
