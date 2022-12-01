import React, { useState, useEffect } from "react";
const ImageSearch = () => {
    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);

    const fetchRequest = async () => {
        const data = await fetch(
          `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${"FwwyFHLxnJhSF5ymSUBK8GvE5wu-BWtvjo9acNBfYm4"}`
        );
        const dataJ = await data.json();
        const result = dataJ.results;
        console.log(result);
        setPics(result);
      };
      useEffect(() => {
        fetchRequest();
      }, []);
      const searchPhotos = async (e) => {
        e.preventDefault();
        fetchRequest();
          setQuery("");
      };
  return (
    <>
      <form className="form" onSubmit={searchPhotos}> 
        <input
          type="text"
          name="query"
          className="input"
          placeholder={"serach for high resolution images"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic) =>
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>)};
      </div>
    </>
    
  )
}

export default ImageSearch