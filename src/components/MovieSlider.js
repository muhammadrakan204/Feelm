import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./movieSlider.css";

const MovieSlider = ({ popularMovies }) => {
  return (
    <div className="container-movie-slider">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {popularMovies.map((movie, i) => {
          return (
            <SwiperSlide key={i}>
              <div className="movie-container">
                <div className="movie-content">
                  <img
                    src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`}
                    className="movie-img"
                  />
                  <p className="title">{movie.title}</p>
                  <div className="overview">
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                  </div>
                  <p className="vote">{movie.vote_average}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
