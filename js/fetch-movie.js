const URLSERVER = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWZkMTY4NjcxMjM5YmEzYWI3MzQ0YzY1ZjU2NzJiMSIsInN1YiI6IjY2NDY2MzRiNjBmZTQ0ZjgwNjk2NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oDPXYNHJwAUFNhuDsHrrCtz0tNjZKvtNO1Zjh1NKn1o'
  }
};

const renderPopular = (movie) =>{
  let html =  `<a href="./pages/detalle.html">
                <div class="pelicula">                
                  <img class="imgTendencia" src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" loading="lazy" alt="${movie.tilte}">                    
                   <div class="tituloPelicula">
                    <h4>${movie.title}</h4>
                  </div>                
                </div>
               </a>
            `
  return html
}

fetch(`${URLSERVER}/movie/popular`, options)
  .then(response => response.json())
  .then(response => {
          console.log(response)
          let movies = response.results;
          let divPopular= document.getElementById('list-popular');
          for (let i = 0; i < 12; i++) {
            let html = renderPopular(movies[i]);
            divPopular.insertAdjacentHTML('beforeend',html)
          }
        }
      )
  .catch(err => console.error(err));


  const renderTopRated = (movie) => {
    let html = `<div class="peliculaItem">
                    <img class="imgAclamada" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}" loading="lazy">
                </div>
                `
    return html;
  }
  
  fetch(`${URLSERVER}/movie/top_rated`, options)
    .then(response => response.json())
    .then(response => {
            console.log(response)
            let movies = response.results;
            let divTopRated = document.getElementById('list-top-rated');
            movies.forEach(movie => {
              let html = renderTopRated(movie);
              divTopRated.insertAdjacentHTML('beforeend',html)
            });
          }
        )
    .catch(err => console.error(err));