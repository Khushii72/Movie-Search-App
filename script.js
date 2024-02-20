const Search_API = "https://imdb146.p.rapidapi.com/v1/find/?query=";

const url = "https://imdb146.p.rapidapi.com/v1/find/?query=fav";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "31bcc14639msh4c411f9642070edp1941cejsn4b8b56dfbff2",
    "X-RapidAPI-Host": "imdb146.p.rapidapi.com",
  },
};

async function data() {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    showMovies(result.titleResults.results);
  } catch (error) {
    console.error(error);
  }
}
data();

// ye HTML WALE TAG
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

///initalyy get fav movies
// console.log(result);
// yaha pe show karenge
// showMovies(respData.results);

function showMovies(movies) {
  //clear main
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { titlePosterImageModel, titleNameText } = movie;
    // raja
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
       <img src="${titlePosterImageModel.url}" alt="${titleNameText}"/>

     <div class="movie-info">
         <h3>${titleNameText}</h3>
     </div>
     `;

    main.appendChild(movieEl);
  });
}

async function getMovies(urlS) {
  try {
    const response = await fetch(urlS, options);
    const result = await response.json();
    console.log(result);
    showMovies(result.titleResults.results);
  } catch (error) {
    console.error(error);
  }
}

// function getClassByRate(vote) {
//   if (vote >= 8) {
//     return "green";
//   } else if (vote >= 5) {
//     return "orange";
//   } else {
//     return "red";
//   }
// }

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getMovies(Search_API + searchTerm);

    search.value = "";
  }
});
