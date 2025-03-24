const VITE_AUTH_KEY = import.meta.env.VITE_AUTH_KEY;


const urlGenre = "https://api.themoviedb.org/3/genre/movie/list?language=en";
const optionsGenre = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${VITE_AUTH_KEY}` 
  }
};


const getGenres = async ({ title, poster_path, genre_ids, id }) => {
  try {
    const res = await fetch(urlGenre, optionsGenre);
    if (!res.ok) throw new Error(res.statusText);
    const dataJSON = await res.json();
    const genresList = dataJSON.genres;

    const genres = genre_ids.map(
      (id) => genresList.find((genre) => genre.id === id)
    );

    return {
      id,
      title,
      poster_path,
      genres, 
    };
  } catch (error) {
    console.log(error.message);
    return { title, poster_path, genres: [] };
  }
};



// FETCHING

const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      `Bearer ${VITE_AUTH_KEY}` 
  },
};

export const getMovies = async () => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(res.statusText);
    const dataJSON = await res.json();
    const dataMovies = dataJSON.results;

    const moviesExtractData = await Promise.all(
      dataMovies.map(async (el) => {
        const genreData = await getGenres(el);
        return {
          id: genreData.id,          
          title: genreData.title,
          poster_path: genreData.poster_path, 
          genres: genreData.genres.map((g) => g.name).slice(0, 2), // Ambil nama genre dan hanya 2 pertama
        };
      })
    );

    return moviesExtractData;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};



console.log(getMovies())



const urlUpcoming = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const getUpcomingMovies = async () => {
  try {
    const res = await fetch(urlUpcoming, options);
    if (!res.ok) throw new Error(res.statusText);
    const dataJSON = await res.json();
    const dataMovies = dataJSON.results;

    const moviesExtractData = await Promise.all(
      dataMovies.map(async (el) => {
        const genreData = await getGenres(el);
        return {
          title: genreData.title,
          poster_path: genreData.poster_path, 
          genres: genreData.genres.map((g) => g.name).slice(0, 2), // Ambil 2 genre pertama
        };
      })
    );

    return moviesExtractData;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};
