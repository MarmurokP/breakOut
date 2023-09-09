import { getRange } from "../utils"

export const BLOCKS_MAX_DENSITY = 3

const getRandomBlock = () => Math.floor(Math.random() * BLOCKS_MAX_DENSITY)

const getBlocks = (rows, columns) =>
getRange(rows).map(() => getRange(columns).map(getRandomBlock))

export const LEVELS = [
    {
        lives: 5,
        paddleWidth: 3.5,
        speed: 1,
        blocks: getBlocks(3, 6)
    },
    {
        lives: 4,
        paddleWidth: 3,
        speed: 1.4,
        blocks: getBlocks(4, 7)
    },
    {
        lives: 4,
        paddleWidth: 2.5,
        speed: 1.8,
        blocks: getBlocks(5, 8)
    }
]