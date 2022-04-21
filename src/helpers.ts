import {Brick} from "./sprites/Brick";

import {
    BRICK_ENERGY,
    BRICK_HEIGHT,
    BRICK_IMAGES,
    BRICK_PADDING,
    BRICK_WIDTH,
    LEVEL,
    STAGE_COLS,
    STAGE_PADDING
} from "./setup";

export function createBricks(): Brick[] {
    return LEVEL.reduce((acumulator, element, index) => {
        const row = Math.floor((index + 1) / STAGE_COLS);
        const column = index % STAGE_COLS;

        const x = STAGE_PADDING + column * (BRICK_WIDTH + BRICK_PADDING);
        const y = STAGE_PADDING + row * (BRICK_HEIGHT + BRICK_PADDING);

        if (element !== 0) {
            return [
                ...acumulator,

                new Brick(
                    BRICK_WIDTH,
                    BRICK_HEIGHT,
                    {x, y},
                    BRICK_ENERGY[element],
                    BRICK_IMAGES[element]
                )
            ];
        } else {
            return acumulator;
        }
    }, [] as Brick[]);
}