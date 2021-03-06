import React, { useState,useEffect } from "react";
import CurrentlyCard from "./CurrentlyCard";
import Search from "./Search";
import useFetch from './useFetch'
// import Api from "./Api"

function App() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [name, setName] = useState('music')

  const searchName = (name) => {
    setName (name)
  };
     const search = async (name) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${name}`;
    await fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "2d8bcfc378mshd0a8c0076754a4dp18578ajsnbf56719ff2ce",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  };
  useEffect(() => {
      search(name)
  }, [name])
    
  return (
    <div className="container">
      <Search searchName={searchName}></Search>
      <CurrentlyCard
        forecast={items}
        isLoaded={isLoaded}
        error={error}
      ></CurrentlyCard>
    </div>
  );
}

export default App;
