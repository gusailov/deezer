import React, { useState,useEffect } from "react";

export default function useFetch(url, defaultResponse,name) {
const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
    
   async function getDataFromAPI() {
             await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "2d8bcfc378mshd0a8c0076754a4dp18578ajsnbf56719ff2ce"
                }
            }).then((res) => res.json())
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
    }
  
    useEffect(() => {
      getDataFromAPI()
    }, []);
  
    return {items,isLoaded,error};
  }