const API_KEY = "410829d0794e6d88f1c40cbae56a9f50";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gernres=28`,
  fetchCommedyMovies: `/discover/movie?api_key=${API_KEY}&with_gernres=35`,
  fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_gernres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_gernres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_gernres=99`,
};

export default requests;
