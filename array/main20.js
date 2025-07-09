var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man", "hulk", "thor"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2 || i == 4) {
        continue;
    }
    console.log(movies[i]);
}