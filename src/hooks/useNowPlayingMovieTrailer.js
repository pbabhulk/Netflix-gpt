import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );

    const data = await movieData.json();
    const filterResult = data.results.filter(
      (video) => video.type === "Trailor"
    );

    const movieTrailor = filterResult.length
      ? filterResult[0]
      : data.results[0];

    dispatch(addTrailerVideo(movieTrailor));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useNowPlayingMovieTrailer;
