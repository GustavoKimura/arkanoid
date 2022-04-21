import {Vector} from "../types";

export class Paddle {
    private image: HTMLImageElement = new Image();
    private movingLeft: boolean;
    private movingRight: boolean;

    constructor(
        private speed: number,
        private width: number,
        private height: number,
        private position: Vector,
        imageSource: string
    ) {
        this.movingLeft = false;
        this.movingRight = false;

        this.speed = speed;
        this.width = width;
        this.height = height;
        this.position = position;
        this.image.src = imageSource;

        document.addEventListener('keydown', (event) => this.handleKeyDown(event));
        document.addEventListener('keyup', (event) => this.handleKeyUp(event));
    }

    public getSpeed(): number {
        return this.speed;
    }

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getPosition(): Vector {
        return this.position;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    public getMovingLeft(): boolean {
        return this.movingLeft;
    }

    public getMovingRight(): boolean {
        return this.movingRight;
    }

    public movePaddle() {
        if (this.movingLeft) {
            this.position.x -= this.speed;
        }

        if (this.movingRight) {
            this.position.x += this.speed;
        }
    }

    private handleKeyDown(event: KeyboardEvent) {
        if (event.code === 'ArrowLeft' || event.key === 'ArrowLeft') {
            this.movingLeft = true;
        }

        if (event.code === 'ArrowRight' || event.key === 'ArrowRight') {
            this.movingRight = true;
        }
    }

    private handleKeyUp(event: KeyboardEvent) {
        if (event.code === 'ArrowLeft' || event.key === 'ArrowLeft') {
            this.movingLeft = false;
        }

        if (event.code === 'ArrowRight' || event.key === 'ArrowRight') {
            this.movingRight = false;
        }
    }
}