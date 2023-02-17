var score_list = document.querySelector(".score-list");
var clearClick = document.getElementById("#clearScores");

for (var i = 0; i < window.localStorage.length; i++) {
    if (window.localStorage.key(i) != "highScore") {
        var item = document.createElement("li");
        item.textContent = window.localStorage.key(i) + " = " + window.localStorage.getItem(window.localStorage.key(i));
        score_list.appendChild(item);
    }
}


clearClick.addEventListener("click", function (event) {
    event.preventDefault();
    window.localStorage.clear();
    window.location.reload();
})