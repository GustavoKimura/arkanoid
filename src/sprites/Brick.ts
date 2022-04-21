import {Vector} from "../types";

export class Brick {
    private image: HTMLImageElement = new Image();

    constructor(
        private width: number,
        private height: number,
        private position: Vector,
        private energy: number,
        imageSource: string
    ) {
        this.width = width;
        this.height = height;
        this.position = position;
        this.energy = energy;
        this.image.src = imageSource;
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

    public getEnergy(): number {
        return this.energy;
    }

    public getImage(): HTMLImageElement {
        return this.image;
    }

    public setEnergy(value: number) {
        this.energy = value;
    }
}