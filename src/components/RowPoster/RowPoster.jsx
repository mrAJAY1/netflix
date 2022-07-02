import axios from "../../axios";
import { useState } from "react";
import React, { useEffect } from "react";
import { imgURL, API_KEY } from "../../constants/constants";
import "./RowPoster.css";
import YouTube from "react-youtube";
function RowPoster({ title, isSmall, url }) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    axios.get(url).then((result) => {
      setMovies(result.data.results);
    });
  }, []);
  const handleClick = (id) => {
    if (urlId) setUrlId('')
    else {
      axios
        .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          } else {
            console.log("Array empty");
          }
        });
    }

  };
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="posters">
        {movies.map((movie) => (
          <img
            onClick={() => {
              handleClick(movie.id);
            }}
            key={movie.id ? movie.id : ""}
            className={isSmall ? "smallPoster" : ""}
            src={movie.backdrop_path ? imgURL + movie.backdrop_path : ""}
            alt="Poster"
          />
        ))}
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default RowPoster;
