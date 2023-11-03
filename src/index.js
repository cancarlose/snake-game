const snake = document.getElementById("snake");
const food = document.getElementById("food");
let snakeX = 10;
let snakeY = 10;
let foodX;
let foodY;
let score = 0;
let interval;
let direction = "right";

function startGame() {
    generateFood();
    interval = setInterval(updateGame, 100);
    document.addEventListener("keydown", changeDirection);
}

function generateFood() {
    foodX = Math.floor(Math.random() * 15) * 20;
    foodY = Math.floor(Math.random() * 15) * 20;
    food.style.left = foodX + "px";
    food.style.top = foodY + "px";
}

function updateGame() {
    switch (direction) {
        case "up":
            snakeY -= 20;
            break;
        case "down":
            snakeY += 20;
            break;
        case "left":
            snakeX -= 20;
            break;
        case "right":
            snakeX += 20;
            break;
    }

    if (snakeX === foodX && snakeY === foodY) {
        score++;
        generateFood();
    }

    if (snakeX < 0 || snakeX >= 300 || snakeY < 0 || snakeY >= 300) {
        clearInterval(interval);
        alert("Game Over! Your score: " + score);
        location.reload();
    }

    snake.style.left = snakeX + "px";
    snake.style.top = snakeY + "px";
}

function changeDirection(event) {
    switch (event.key) {
        case "ArrowUp":
            direction = "up";
            break;
        case "ArrowDown":
            direction = "down";
            break;
        case "ArrowLeft":
            direction = "left";
            break;
        case "ArrowRight":
            direction = "right";
            break;
    }
}
startGame();
