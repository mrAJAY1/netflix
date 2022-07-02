import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, imgURL } from "../../constants/constants";
import axios from "../../axios";
import YouTube from "react-youtube";

function Banner({ movie, setMovie }) {
  // const [IdURl, setIdUrl] = useState("");
  // const bannerOnClick = (id) => {
  //   axios
  //     .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  //     .then((response) => {
  //       if (response.data.results.length !== 0) {
  //         setIdUrl(response.data.results[0]);
  //       } else {
  //         console.log("Array empty");
  //       }
  //     });
  // }onClick={bannerOnClick(movie.id)}
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results)
        setMovie(
          response.data.results[
          Math.floor(Math.random() * response.data.results.length)
          ]
        );
      });
  }, []);
  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };
  return (
    <div
      style={{
        backgroundImage: `url(${movie.backdrop_path ? imgURL + movie.backdrop_path : ""
          })`,
      }}
      className="banner"
    >
      <div className="overlay">
        <div className="content">
          <h1 className="title">{movie.title ? movie.title : movie.name}</h1>
          <div className="banner-btn">
            <button className="btn" >Play</button>
            <button className="btn">My List</button>
          </div>
          <h1 className="description">{movie.overview}</h1>
        </div>
          <div className="fade_bottom"></div>
      </div>
      {/* {<IdURl></IdURl> && <YouTube videoId={IdURl.key} opts={opts} />} */}
    </div>

  );
}

export default Banner;
