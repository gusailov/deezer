import React from "react";

function DailyCards(props) {
  const { forecast, isLoaded } = props;
  const daily = forecast.data;
  
  if (forecast.error) {
    return <div>Помилка: {forecast.error.message}</div>;
  } else if (!isLoaded || forecast.length === 0) {
    return <div>Завантаження...</div>;
  } else {
    return (
      <div className="container">
        {daily.map((item) => (
          <div key={item.id} className="col sm mb-5 mt-5">
            <div className="card card-block">
              <span className="card-text">
                <a href={item.artist.link}>
                  <p>{item.artist.name}</p>
                </a>
                <p>{item.album.title}</p>
                <img src={item.album.cover} alt="cover" />
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default DailyCards;
