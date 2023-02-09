var score_list = document.querySelector(".score-list");
var clearClick = document.getElementById("#clearScores");

for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) != "highScore") {
        var item = document.createElement("li");
        item.textContent = localStorage.key(i) + " = " + localStorage.getItem(localStorage.key(i));
        score_list.appendChild(item);
    }
}

// This clears the local storage and reloads the page.
clearClick.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.clear();
    location.reload();
})