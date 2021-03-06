import React from "react";

export function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          className="bi bi-chevron-right"
          width="32"
          height="32"
          viewBox="0 0 20 20"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </div>
    );
  }
  
  export function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <svg
          className="bi bi-chevron-left"
          width="32"
          height="32"
          viewBox="0 0 20 20"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </div>
    );
  }