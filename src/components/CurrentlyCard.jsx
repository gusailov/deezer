import React from "react";


function DailyCards(props) {
  const {forecast, isLoaded , error} = props
  const daily = forecast.data;
   
  if (forecast.error) {
    return <div>Помилка: {forecast.error.message}</div>;
  } else if (!isLoaded) {
    return <div>Завантаження...</div>;
  } else {
    return (
    <div className="container mb-5 mt-5">
     
        {daily.map((item) => (
          <div key={item.id} className="col sm">
            <div className="card card-block">
                            <span className="card-text">
                <p>{item.artist.name}</p>
                <p>{item.album.title}</p>
                <img src={item.album.cover} alt="cover"/>
              </span>
                          </div>
          </div>
        ))}
      
    </div>
  );}
}

export default DailyCards;
