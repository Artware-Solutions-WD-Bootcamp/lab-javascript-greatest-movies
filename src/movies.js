
// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple
// movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  let movieDirectors = movies.map((movie) => {
    return movie.director
  })
  return movieDirectors
}


// Iteration 2: Steven Spielberg. The best?
// - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let spielbergDrama = movies.filter(movie => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"))
  return spielbergDrama.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  if (movies.length === 0) {
    return 0
  }
  let allMovies = movies.reduce((score, movie) => {
    if(movie.score !== undefined){
      return score + movie.score / movies.length
    } else {
      return score
    }
  }, 0)
  
  return Number(allMovies.toFixed(2))
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  let dramaMovies = movies.filter(movie => movie.genre.includes("Drama"))

  let avgDramaMovies = dramaMovies.reduce((score, movie) => {
    if(movie.score !== undefined){
      return score + movie.score / dramaMovies.length
    } else {
      return score
    }
  }, 0)

  return Number(avgDramaMovies.toFixed(2))
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  let moviesByYear = JSON.parse( JSON.stringify( movies ) )
  let sortedMovies = moviesByYear.sort((first, second) => {
    if (first.year > second.year){
      return 1
    } else {
      return -1
    }
  })
  return sortedMovies

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  // Copy the original array to preserve it
  let moviesByTitle = JSON.parse( JSON.stringify( movies ) )
  
  // Sort movies by title
  moviesByTitle.sort((first, second) => {
    if (first.title.toLowerCase() < second.title.toLowerCase()){
      return -1
    } else {
      return 1
    }
    
  });
  
  let moviesList = [];
  if (moviesByTitle.length < 20){
    // Si son menos de 20 devolverlos todos
    for (i=0; i<moviesByTitle.length;i++){
      moviesList.push(moviesByTitle[i].title)
    }
  } else { // Si no, limitar la lista a 20
    for (i=0; i<20; i++){
      moviesList.push(moviesByTitle[i].title)
    }
  }
  
  // Devolver resultado
  return moviesList
}


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(movies) {}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(movies) {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
