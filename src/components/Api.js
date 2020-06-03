import React, { useState, useEffect } from "react";
import Search from "./Search"

function Api() {
  const [error, setError] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
 
    useEffect(() => {
    
    fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=abba", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
		"x-rapidapi-key": "2d8bcfc378mshd0a8c0076754a4dp18578ajsnbf56719ff2ce"
	}
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
  }, []);
  //console.log(items);
  return ({items:items, isLoaded:isLoaded, error:error});
}

export default Api;
