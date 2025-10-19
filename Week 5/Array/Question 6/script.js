document.getElementById("runProgram").addEventListener("click", function () {
    let movies = [];
    let numMovies = parseInt(prompt("How many movies would you like to rate?"));

    for (let i = 0; i < numMovies; i++) {
        let title = prompt("Enter the title of movie " + (i + 1) + ":");
        let rating = parseFloat(prompt("Enter your rating for '" + title + "' (1-5):"));
        movies.push({ title: title, rating: rating });
    }

    movies.sort(function (a, b) {
        return b.rating - a.rating;
    });

    let highestRated = movies[0];
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "<h2>Sorted Movie List (Highest to Lowest Rating):</h2>";
    let list = document.createElement("ul");

    for (let movie of movies) {
        let item = document.createElement("li");
        item.textContent = movie.title + " - Rating: " + movie.rating;
        list.appendChild(item);
    }

    outputDiv.appendChild(list);

    let topMovie = document.createElement("h2");
    topMovie.textContent = "Highest Rated Movie: " + highestRated.title + " (" + highestRated.rating + ")";
    outputDiv.appendChild(topMovie);
});
