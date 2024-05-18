const URLSERVER = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjI1MDNjNjg4MzU4MGM4NmYxNTNjMzhhOTNkYjE3NyIsInN1YiI6IjY2NDY2MzRiNjBmZTQ0ZjgwNjk2NmViZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Uh3kUGIY7JzvT7_uCrknoq43dZezBJhZl2CaxpWErNI'
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
          let divTopRated = document.getElementById('list-popular');
          for (let i = 0; i < 12; i++) {
            let html = renderPopular(movies[i]);
            divTopRated.insertAdjacentHTML('beforeend',html)
          }
        }
      )
  .catch(err => console.error(err));
