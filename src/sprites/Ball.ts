import {Vector} from "../types";

export class Ball {
    private image: HTMLImageElement = new Image();
    private speed: Vector;

    constructor(
        speed: number,
        private size: number,
        private position: Vector,
        imageSource: string
    ) {
        this.speed = {
            x: speed,
            y: -speed
        };

        this.size = size;
        this.position = position;
        this.image.src = imageSource;
    }

    public getSpeed(): Vector {
        return this.speed;
    }

    public getWidth(): number {
        return this.size;
    }

    public getHeight(): number {
        return this.size;
    }

    public getPosition(): Vector {
        return this.position;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    public changeYDirection() {
        this.speed.y = -this.speed.y;
    }

    public changeXDirection() {
        this.speed.x = -this.speed.x;
    }

    public moveBall() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}