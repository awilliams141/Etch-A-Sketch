const gridSize = document.getElementById("slider");

const container = document.getElementById("grid-container");
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("square");
        container.appendChild(gridSquare);
    }
}

gridSize.addEventListener("input", function() {
    const value = gridSize.value;
    container.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
});

//document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

/*document.querySelector("slider").addEventListener("change", function() {
    document.getElementById("grid-container").style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
})*/

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

const squares = document.querySelectorAll("div.square");
squares.forEach((square) => {
    square.addEventListener("mouseover", changeColor);
})
