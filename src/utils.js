export function dateFormat(time) {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString("uk-UK", options);
  return humanDateFormat;
}

export function dateFormatHourly(time) {
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  const milliseconds = time * 1000;
  const dateObject = new Date(milliseconds);
  const humanDateFormat = dateObject.toLocaleString("uk-UK", options);
  return humanDateFormat;
}

export async function searchName(name) {
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
  return 
}
