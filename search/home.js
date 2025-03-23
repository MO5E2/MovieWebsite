/*defines method and provides api key within the fetch() function*/
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/week?`;
  const trendingContainer = document.getElementById("trending-movies");
  
    /*paste api above*/
  
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


    /*END OF TRENING MOVIES     START OF TOP MOVIES*/

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