import { Cell } from "./Cell";

export function removeDuplicatedTiles(tiles) {
    const uniqueTilesMap = {};
    for (const tile of tiles) {
        const key = tile.edges.join(','); // ex: "ABB,BCB,BBA,AAA"
        uniqueTilesMap[key] = tile;
    }
    return Object.values(uniqueTilesMap);
}

export function startOver(DIM, grid, tiles) {
    // Create cell for each spot on the grid
    for (let i = 0; i < DIM * DIM; i++) {
        grid[i] = new Cell(tiles.length);
    }
    return grid;
}
export function checkValid(arr, valid) {
    //console.log(arr, valid);
    for (let i = arr.length - 1; i >= 0; i--) {

        let element = arr[i];

        if (!valid.includes(element)) {
            arr.splice(i, 1);
        }
    }
}
export function drawGrid(p5, DIM, grid, tiles) {
    p5.background(0);

    const w = p5.width / DIM;
    const h = p5.height / DIM;
    for (let j = 0; j < DIM; j++) {
        for (let i = 0; i < DIM; i++) {
            let cell = grid[i + j * DIM];
            if (cell.collapsed) {
                let index = cell.options[0];
                p5.image(tiles[index].img, i * w, j * h, w, h);
            } else {
                p5.noFill();
                p5.stroke(51);
                p5.rect(i * w, j * h, w, h);
            }
        }
    }
}