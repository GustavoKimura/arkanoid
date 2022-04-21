import {CanvasView} from "./view/CanvasView";
import {Brick} from "./sprites/Brick";
import {Paddle} from "./sprites/Paddle";
import {Ball} from "./sprites/Ball";
import {Collision} from "./Collision";

import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png';

import {
    BALL_SIZE,
    BALL_SPEED,
    BALL_STARTX,
    BALL_STARTY,
    PADDLE_HEIGHT,
    PADDLE_SPEED,
    PADDLE_STARTX,
    PADDLE_WIDTH
} from './setup';

import {createBricks} from "./helpers";

let gameOver = false;
let score = 0;

function setGameOver(view: CanvasView) {
    view.drawInformation('Game Over!');

    gameOver = false;
}

function setGameWin(view: CanvasView) {
    view.drawInformation('Game Won!');

    gameOver = false;
}

function gameLoop(view: CanvasView, bricks: Brick[], paddle: Paddle, ball: Ball, collision: Collision) {
    view.clear();
    view.drawBricks(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    ball.moveBall();

    if (
        (paddle.getMovingLeft() && paddle.getPosition().x > 0) ||
        (paddle.getMovingRight() && paddle.getPosition().x < view.canvas.width - paddle.getWidth())
    ) {
        paddle.movePaddle();
    }

    collision.checkBallCollision(ball, paddle, view);

    const isCollidingWithBricks = collision.isCollidingWithBricks(ball, bricks);

    if (isCollidingWithBricks) {
        view.drawScore(++score);
    }

    if (ball.getPosition().y > view.canvas.height) {
        gameOver = true;
    }

    if (bricks.length === 0) {
        return setGameWin(view);
    }

    if (gameOver) {
        return setGameOver(view);
    }

    requestAnimationFrame(() => gameLoop(view, bricks, paddle, ball, collision));
}

function startGame(view: CanvasView) {
    score = 0;
    view.drawInformation('');
    view.drawScore(0);

    const bricks = createBricks();

    const paddle = new Paddle(PADDLE_SPEED, PADDLE_WIDTH, PADDLE_HEIGHT, {
        x: PADDLE_STARTX,
        y: view.canvas.height - PADDLE_HEIGHT - 5
    }, PADDLE_IMAGE);

    const ball = new Ball(BALL_SPEED, BALL_SIZE, {x: BALL_STARTX, y: BALL_STARTY}, BALL_IMAGE);

    const collision = new Collision();

    gameLoop(view, bricks, paddle, ball, collision);
}

const view = new CanvasView('#playField');
view.initializeStartButton(startGame);