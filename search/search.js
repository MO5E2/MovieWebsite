const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
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