import {Brick} from "./sprites/Brick";
import {Paddle} from "./sprites/Paddle";
import {Ball} from "./sprites/Ball";
import {CanvasView} from "./view/CanvasView";

export class Collision {
    public checkBallCollision(ball: Ball, paddle: Paddle, view: CanvasView) {
        if (
            (ball.getPosition().x + ball.getWidth() > paddle.getPosition().x) &&
            (ball.getPosition().x < paddle.getPosition().x + paddle.getWidth()) &&
            (ball.getPosition().y + ball.getHeight() === paddle.getPosition().y)
        ) {
            ball.changeYDirection();
        }

        if ((ball.getPosition().x > view.canvas.width - ball.getWidth() || ball.getPosition().x < 0)) {
            ball.changeXDirection();
        }

        if (ball.getPosition().y < 0) {
            ball.changeYDirection();
        }
    }

    public isCollidingWithBrick(ball: Ball, brick: Brick): boolean {
        return (
            (ball.getPosition().x < brick.getPosition().x + brick.getWidth()) &&
            (ball.getPosition().x + ball.getWidth() > brick.getPosition().x) &&
            (ball.getPosition().y < brick.getPosition().y + brick.getHeight()) &&
            (ball.getPosition().y + ball.getHeight() > brick.getPosition().y)
        );
    }

    public isCollidingWithBricks(ball: Ball, bricks: Brick[]): boolean {
        let colliding = false;

        bricks.forEach((brick, index) => {
            if (this.isCollidingWithBrick(ball, brick)) {
                ball.changeYDirection();

                if (brick.getEnergy() === 1) {
                    bricks.splice(index, 1);
                } else {
                    brick.setEnergy(brick.getEnergy() - 1);
                }

                colliding = true;
            }
        });

        return colliding;
    }
}