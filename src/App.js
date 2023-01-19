import "./App.css";
import MovieSlider from "./components/MovieSlider";
import axios from "axios";
import Movie from "./components/Movie";
import "./components/navigation.css";

import { useEffect, useState } from "react";

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [selectMovie, setSelectMovie] = useState([{}]);
  const [searchKey, setSearchKey] = useState("");

  const backdropPath = "https://image.tmdb.org/t/p/original";

  const baseUrl = process.env.REACT_APP_BASEURL;

  const getMovie = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${baseUrl}/${type}/movie`, {
      params: {
        api_key: process.env.REACT_APP_APIKEY,
        query: searchKey,
      },
    });
    setSelectMovie(results[0]);
    setPopularMovies(results);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(popularMovies);

  const searchMovies = (e) => {
    e.preventDefault();
    getMovie(searchKey);
  };

  return (
    <>
      <header
        style={{
          backgroundImage: `url(${backdropPath}${selectMovie.backdrop_path})`,
        }}
      >
        <nav>
          <h1>Feelm</h1>
          <form onSubmit={searchMovies}>
            <div className="container-form">
              <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <a href="">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
            </div>
          </form>
        </nav>
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
