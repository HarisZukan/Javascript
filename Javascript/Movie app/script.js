
let search=document.querySelector("#searchMovie");


    

function getMovies(search){
 axios.get('http://www.omdbapi.com/?s='+search+'&apikey=thewdb')
 .then((response)=>{
   console.log(response)
   let movies=response.data.Search;
   let output='';
   $.each(movies,(index,movie) => {
     output+=`
     <div class='col-md-4 row me-2'>
     <div class='mt-4 p-4 bg-card'>
       <div class='well text-center'>
       <img class='mt-4'  src='${movie.Poster}'>
        <h5 class='text-light mt-2 '>${movie.Title}</h5>
        <a onclick="movieSelected('${movie.imdbID}')" class='btn btn-primary' href='movie.html'>Movie Details</a>


       </div>
     </div>
     </div>
     
     `
   });
   let moviee=document.getElementById('movies');
   moviee.innerHTML=output;
 })
 .catch((err)=>{
   console.log(err);
 })

}

function movieSelected(id){
  sessionStorage.setItem('movieId',id);
  window.location='movie.html';
  return false;
}

function getMovie(){
  let movieId=sessionStorage.getItem('movieId')
  axios.get('http://www.omdbapi.com/?i='+movieId+'&apikey=thewdb')
 .then((response)=>{
   console.log(response)
   let movie=response.data;
   
   let output=`
   <div class='row bg-mdb p-4'>

   <div class='col-md-4'>
   <img src='${movie.Poster}' class='thumbnail'>
   </div>
   <div class='col-md-8'>
   <h2 class='text-light'>${movie.Title}</h2>
   <ul class='list-group text-light'><br>
     <li class='list-grup-item'><strong>Genre:</strong> ${movie.Genre}</li><br>
     <li class='list-grup-item'><strong>Released:</strong> ${movie.Released}</li><br>
     <li class='list-grup-item'><strong>Rated:</strong> ${movie.Rated}</li><br>
     <li class='list-grup-item'><strong>IMDB Rating:</strong> ${movie.imdbRating}</li><br>
     <li class='list-grup-item'><strong>Director:</strong> ${movie.Director}</li><br>
     <li class='list-grup-item'><strong>Writer:</strong> ${movie.Writer}</li><br>
     <li class='list-grup-item'><strong>Actors:</strong> ${movie.Actors}</li>

   </ul>

   </div>

   </div>
   <div class='row'>
   <div class='well'>
     <h3 class='text-light p-2 mt-2'>Plot</h3>
     <p class='text-light'>${movie.Plot}</p>
   <hr class='text-light'>
   <a href='http://imdb.com/title/${movie.imdbID}' target='_blank' class='btn btn-primary'>View IMDB </a>;
   <a href='index.html' class='btn btn-danger text-light'>Go Back To Search</a>
 
   </div>
   </div>
   `;

   let moviee=document.getElementById('movie');
   moviee.innerHTML=output;
 })
 .catch((err)=>{
   console.log(err);
 })

}



