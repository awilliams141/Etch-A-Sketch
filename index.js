const container = document.getElementById("main-container");
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);
    }
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

const squares = document.querySelectorAll("div.square");
squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
})