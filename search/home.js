/*defines method and provides api key within the fetch() function*/

const apiKey = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ2MWQ3NzNkMTMzYjI2YWRiM2MwY2U2ODQzNmE4YSIsIm5iZiI6MTc0MjQxMjk1Mi41MjQ5OTk5LCJzdWIiOiI2N2RiMWM5ODhhZjQ1MmYzMGZlOWQwMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XeV45F5ItmZeiv7r4ga9--hjwIyO7fB2f8AUTe_RbVY`;

    /*paste api above*/

  const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?`;
  const trendingContainer = document.getElementById("trending-movies");
  
  
    async function fetchTrending() {
      try {
        const response = await fetch(trendingUrl, options);
        const data = await response.json();
    
        data.results.forEach((media, index) => {
          if(index >= 6) return;
          const trendingMovieCard = createTrendingMovieCard(media);
          trendingContainer.appendChild(trendingMovieCard);
        });
      } 
      catch (error) {
          console.error("Error fetching data:", error);
      }
    }
    
    function createTrendingMovieCard(media) {
      const { title, name, backdrop_path} = media;
    
      const trendingMovieCard= document.createElement("div");
      trendingMovieCard.classList.add("movie_item")
    
      trendingMovieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title || name}</div>
        `;
        return trendingMovieCard;
    }
    fetchTrending();


    /*END OF TRENDING MOVIES     START OF TOP MOVIES*/

    const topUrl = `https://api.themoviedb.org/3/movie/top_rated`;
    const topContainer = document.getElementById("top-movies");
  
  
    async function fetchTop() {
      try {
        const response = await fetch(topUrl, options);
        const data = await response.json();
    
        data.results.forEach((media, index) => {
          if(index >= 6) return;
          const topMovieCard = createTopMovieCard(media);
          topContainer.appendChild(topMovieCard);
        });
      } 
      catch (error) {
          console.error("Error fetching data:", error);
      }
    }
    
    function createTopMovieCard(media) {
      const { title, name, backdrop_path} = media;
    
      const topMovieCard= document.createElement("div");
      topMovieCard.classList.add("movie_item")
    
      topMovieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title || name}</div>
        `;
        return topMovieCard;
    }
    fetchTop();

    /*END OF TOP MOVIES     START OF SEARCH MOVIES*/

    const searchUrl=`https://api.themoviedb.org/3/search/movie?query=${search-item}`;
    const searchContainer = document.getElementById("search-item");
  
  
    document.getElementById("query").onclick = async function fetchSearch() {
      try {
        const response = await fetch(searchUrl, options);
        const data = await response.json();
    
        data.results.forEach((media) => {
          const searchMovieCard = createSearchMovieCard(media);
          searchContainer.appendChild(searchMovieCard);
        });
      } 
      catch (error) {
          console.error("Error fetching data:", error);
      }
    }
    
    function createSearchMovieCard(media) {
      const { title, name, backdrop_path} = media;
    
      const searchMovieCard= document.createElement("div");
      searchMovieCard.classList.add("movie_item")
    
      searchMovieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title">${title || name}</div>
        `;
        return searchMovieCard;
    }
    fetchSearch();
