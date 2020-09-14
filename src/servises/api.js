import axios from 'axios';

const apiKey = 'd2647f13a0aaf143828de6ae431edbaa';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchAllMovies = async () => {
  try {
    const data = await axios.get(`/trending/all/day?api_key=${apiKey}`);
    return data.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMoviesList = async (query = '') => {
  try {
    const data = await axios.get(
      `/search/movie?query=${query}&api_key=${apiKey}&language=en-US&page=1&include_adult=false`,
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieInfo = async id => {
  try {
    const data = await axios.get(
      `/movie/${id}?api_key=${apiKey}&language=en-US`,
    );
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieCast = async id => {
  try {
    const data = await axios.get(`/movie/${id}/credits?api_key=${apiKey}`);

    return data.data.cast;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchMovieReviews = async id => {
  try {
    const data = await axios.get(
      `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`,
    );
    return data.data.results;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
