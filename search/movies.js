/*defines method and provides api key within the fetch() function*/

    /*paste api above*/
  

const moviesUrl=`https://api.themoviedb.org/3/discover/movie`
const moviesContainer = document.getElementById("movies");

  async function fetchMovies() {
    try {
      const response = await fetch(moviesUrl, options);
      const data = await response.json();
  
      data.results.forEach(media => {
        const movieCard = createMovieCard(media);
        moviesContainer.appendChild(movieCard);
      });
    } 
    catch (error) {
        console.error("Error fetching data:", error);
    }
  }
  
  function createMovieCard(media) {
    const { title, name, backdrop_path, release_date } = media;
  
    const movieCard= document.createElement("div");
    movieCard.classList.add("movie_item")
  
    movieCard.innerHTML = `
      <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
      <div class = "title">${title || name}</div>
      `;
      return movieCard;
  }
  fetchMovies();