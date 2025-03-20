const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ2MWQ3NzNkMTMzYjI2YWRiM2MwY2U2ODQzNmE4YSIsIm5iZiI6MTc0MjQxMjk1Mi41MjQ5OTk5LCJzdWIiOiI2N2RiMWM5ODhhZjQ1MmYzMGZlOWQwMTMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XeV45F5ItmZeiv7r4ga9--hjwIyO7fB2f8AUTe_RbVY'
    }
  };

  fetch('https://api.themoviedb.org/3/authentication', options)
          .then(res => res.json())
          .then(res => console.log(res))
          .catch(err => console.error(err));

document.getElementById("query").onclick = function(){
  const movieName = document.getElementById("movieName").value;
  document.getElementById("resultText").textContent = 'Search results for '+movieName;

}