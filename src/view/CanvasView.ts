import {Brick} from "../sprites/Brick";
import {Paddle} from "../sprites/Paddle";
import {Ball} from "../sprites/Ball";

export class CanvasView {
    public canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D | null;
    private scoreDisplay: HTMLObjectElement | null;
    private startButton: HTMLObjectElement | null;
    private information: HTMLObjectElement | null;

    constructor(canvasName: string) {
        this.canvas = document.querySelector(canvasName) as HTMLCanvasElement;
        this.context = this.canvas.getContext('2d');
        this.scoreDisplay = document.querySelector('#score');
        this.startButton = document.querySelector('#start');
        this.information = document.querySelector('#info');
    }

    public clear() {
        this.context?.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    public initializeStartButton(startFunction: (view: CanvasView) => void) {
        this.startButton?.addEventListener('click', () => startFunction(this));
    }

    public drawScore(score: number) {
        if (this.scoreDisplay) {
            this.scoreDisplay.innerHTML = score.toString();
        }
    }

    public drawInformation(text: string) {
        if (this.information) {
            this.information.innerHTML = text;
        }
    }

    public drawSprite(sprite: Brick | Paddle | Ball) {
        if (sprite) {
            this.context?.drawImage(
                sprite.getImage(),
                sprite.getPosition().x,
                sprite.getPosition().y,
                sprite.getWidth(),
                sprite.getHeight()
            );
        }
    }

    public drawBricks(bricks: Brick[]) {
        bricks.forEach((brick) => this.drawSprite(brick));
    }
}