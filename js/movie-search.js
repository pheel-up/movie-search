var movieSearch = {
  count: 0,
  titleEl: document.querySelector("#title"),
  yearEl: document.querySelector("#year"),
  plotEl: document.querySelector("#plot"),
  searchEl: document.querySelector("#search"), 
  resetEl: document.querySelector("#reset"),
  movieEl: document.querySelector("#movie"),
  display: (movieObj) => {
    console.log(movieObj);
    movieSearch.count++;

    let movieHtmlCntnr = {
      fieldset: `<fieldset id=movieFldst${movieSearch.count} class=movie-fieldset><legend style="font-size: 1.25em"><b>Movie Number ${movieSearch.count}</b></legend></fieldset>`,
      snglLn: `<div id=snglLnCntnr${movieSearch.count} class=sngl-ln-cntnr></div>`,
      mltLn: `<div id=mltLnCntnr${movieSearch.count} class=mlt-ln-cntnr></div>`,
    }
    
    let foundMovieHtml = {
      title: `<span id=titleDsply${movieSearch.count} class=title-dsply><b>Title: </b>${movieObj.Title}</span>`,
      year: `<span id=yearDsply${movieSearch.count} class=year-dsply><b>Year: </b>  ${movieObj.Year}</span>`,
      actors: `<span id=actorsDsply${movieSearch.count} class=actors-dsply><b>Cast: </b>  ${movieObj.Actors}</span>`,
      director: `<span id=directorDsply${movieSearch.count} class=director-dsply><b>Director: </b>  ${movieObj.Director}</span>`,
      writer: `<span id=writerDsply${movieSearch.count} class=writer-dsply><b>Writer: </b>  ${movieObj.Writer}</span>`,
      rated: `<span id=ratedDsply${movieSearch.count} class=rated-dsply><b>Rated: </b>  ${movieObj.Rated}</span>`,
      production: `<span id=prodDsply${movieSearch.count} class=prod-dsply><b>Production: </b>  ${movieObj.Production}</span>`,
      runtime: `<span id=runtimeDsply${movieSearch.count} class=runtime-dsply><b>Runtime: </b>  ${movieObj.Runtime}</span>`,
      plot: `<span id=plotDsply${movieSearch.count} class=plot-dsply><b>Plot: </b> ${movieObj.Plot}</span>`,
      awards: `<span id=awardsDsply${movieSearch.count} class=awards-dsply><b>Awards: </b> ${movieObj.Awards}</span>`,      
      ratings: {
        html: (count) => {
          let cnt = 0,
              ratingsDsplyEl = document.getElementById("ratingsDsply" + count);
          
          for (el of movieObj.Ratings) {
            let ratingsString = `${el.Source}: ${el.Value}`;
            // PlwJs.createSpan() is called from plwjs-module.js
            ratingsDsplyEl.appendChild(PlwJs.createSpan("rtngs" + cnt, "rtngs", ratingsString));
            cnt++;
          }        
        },
      },
      poster: `<input id=posterDsply${movieSearch.count} class=poster-dsply type=image src=${movieObj.Poster}></span>`
    };
    
    console.log(movieObj.Response);
    if (movieObj.Response == "False") {
      movieSearch.movieEl.insertAdjacentHTML("beforeend", movieHtmlCntnr.fieldset);
      document.getElementById(`movieFldst${movieSearch.count}`).insertAdjacentHTML("beforeend", `${movieObj.Error} Try a different title and/or year combination.`);
    } else {      
      movieSearch.movieEl.insertAdjacentHTML("beforeend", movieHtmlCntnr.fieldset);
      document.getElementById(`movieFldst${movieSearch.count}`).insertAdjacentHTML("beforeend", movieHtmlCntnr.snglLn);
      document.getElementById(`movieFldst${movieSearch.count}`).insertAdjacentHTML("beforeend", movieHtmlCntnr.mltLn);
      for (key in foundMovieHtml) {
        if (key == "writer" || key == "plot" || key == "poster" || key == "actors" || key == "awards") {
          document.getElementById(`mltLnCntnr${movieSearch.count}`).insertAdjacentHTML("beforeend", foundMovieHtml[key]);
        } else if (key == "ratings") {
          document.getElementById(`mltLnCntnr${movieSearch.count}`).insertAdjacentHTML("beforeend", `<span id=ratingsDsply${movieSearch.count} class=ratings-dsply><b>Ratings: </b>`);
          foundMovieHtml.ratings.html(movieSearch.count);
        } else {
          document.getElementById(`snglLnCntnr${movieSearch.count}`).insertAdjacentHTML("beforeend", foundMovieHtml[key]);
        }
      }
    }
  },
  listener: () => {
    movieSearch.searchEl.addEventListener("click", () => {
      let frmttdTitle = movieSearch.titleEl.value.trim().replace(/ /g, "+");
      let year = movieSearch.yearEl.value.trim();
      let plot = movieSearch.plotEl.value;
      let url = `https://www.omdbapi.com/?t=${frmttdTitle}&y=${year}&plot=${plot}&apikey=da73a73`;
            
      // called from ajax-module.js
      AsyncJs.get(url)
      .then((response) => {
        let movieObj = JSON.parse(response);
        return movieSearch.display(movieObj);
      }, 
      (error) => {
        console.error(error);
      });
    }, false);
    movieSearch.resetEl.addEventListener("click", () => {
      movieSearch.count = 0;
      while(movieSearch.movieEl.firstChild){
        movieSearch.movieEl.removeChild(movieSearch.movieEl.firstChild);
      }
    }, false);
  },
};

var init = (() => {
  PlwJs.dimOff();
  movieSearch.listener();
})();

