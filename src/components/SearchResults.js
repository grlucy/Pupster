import React from "react";

function SearchResults(props) {
  return (
    <>
      <div className="mb-5"></div>
      {props.result.map(src => (
        <img src={src} key={src} className="doggoIMG m-1" alt="Dog" />
      ))}
    </>
  );
}

export default SearchResults;
