import "./App.css";
import MovieSlider from "./components/MovieSlider";
import Navigation from "./components/Navigation";
import axios from "axios";
import Movie from "./components/Movie";

import { useEffect, useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState([{}]);

  const backdropPath = "https://image.tmdb.org/t/p/original";

  const baseUrl = process.env.REACT_APP_BASEURL;

  const getMovie = async () => {
    const {
      data: { results },
    } = await axios.get(`${baseUrl}/discover/movie`, {
      params: { api_key: process.env.REACT_APP_APIKEY },
    });
    setSelectMovie(results[1]);
    setPopularMovies(results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(popularMovies);

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${backdropPath}${selectMovie.backdrop_path})`,
        }}
      >
        <Navigation />
        <div className="container-header">
          <div className="content-header">
            <h1 className="header-title">{selectMovie.title}</h1>
            <p className="header-description">{selectMovie.overview}</p>
            <a href="">
              <button>Watch trailer</button>
            </a>
          </div>
        </div>
      </header>
      <div className="hero">
        <h1 className="title-hero">Popular movies</h1>
        <MovieSlider popularMovies={popularMovies} />
        {/* <Movie /> */}
      </div>
    </>
  );
}

export default App;
