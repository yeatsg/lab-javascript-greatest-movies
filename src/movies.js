// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");

// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  let directorsList = arr.map(function (directorObject){
    return directorObject.director;
  });
  let cleanDirectorsList = directorsList.filter((director, index) => {
    return directorsList.indexOf(director) === index;
});
  return cleanDirectorsList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergDramas = arr.filter(function (movieObject) {
    return movieObject.director === 'Steven Spielberg' && movieObject.genre.includes('Drama')
  });
  return spielbergDramas;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.Length === 0){
    return 0;
  };

  let scoreArray = arr.map(function (movieObject){
    return movieObject.score;
  });
  
  scoreArray =  (scoreArray.reduce((a,b) => {
    return a+b
  }))/ scoreArray.length;
  return Math.round(scoreArray * 100) / 100
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let finalSum
  let scoreList;
  let movieDramas = arr.filter(function (movieObject1) {
    return movieObject1.genre.includes('Drama');
  });
  
  scoreList = movieDramas.map(movieObject2 => {
    return movieObject2.score;
  })
  
  finalSum = (scoreList.reduce((a,b) => {
    return a+b
  }))/ scoreList.length;

  return Math.round(finalSum * 100) / 100;
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  let finalArray = arr.sort(function (a,b) {
    if ( a.year < b.year ){
    return -1;
  } else if ( a.year > b.year ){
    return 1;
  } else {
   a.title.localeCompare(b.title)
  }
  });
  return finalArray;
 }

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let firstArray = arr.sort(function (a,b) {
    if ( a.title < b.title ){
    return -1;
  } else if ( a.title > b.title ){
    return 1;
  } else {
  return 0;
  }
  });
  return firstArray.slice(0, 20)
  }

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



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
