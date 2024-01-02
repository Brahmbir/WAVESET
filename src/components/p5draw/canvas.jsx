import Sketch from "react-p5";
import { useContext, useEffect, useState } from "react";

import { useP5DupeRemover } from "./scripts/useP5DupeRemover";

import { removeDuplicatedTiles, startOver, checkValid, drawGrid } from "./scripts/CanvasFunction";

import { Cell } from "./scripts/Cell"
import { Tile } from "./scripts/Tiles"
import { DataContext } from "../../useDataContext";
import tileSet from "../GenerateBar/all_tile";


const tileImages = [];
const TesttileImages = [];

let grid = [];

export default () => {


    const setParent = useP5DupeRemover();
    const context = useContext(DataContext);

    let DIM = context.dimension;

    useEffect(() => {
        DIM = context.dimension
        grid = startOver(DIM, grid, context.TileClass);
    }, [context.dimension, context.generate])


    const createTile = (p5) => {
        const TestTcont = [];

        for (let i = 0; i < tileSet.length; i++) {
            const temp = []
            for (let j = 0; j < tileSet[i].tile.length; j++) {
                temp[j] = new Tile(TesttileImages[i][j], tileSet[i].tile[j].rules, null, p5);
            }
            TestTcont[i] = temp
        }
        for (let i = 0; i < TestTcont.length; i++) {
            let tempTiles = [];
            for (let j = 0; j < TestTcont[i].length; j++) {
                if (tileSet[i].tile[j].rotate) {
                    for (let x = 1; x < 4; x++) {
                        tempTiles.push(TestTcont[i][j].rotate(x, p5));
                    }
                }
            }
            tempTiles = removeDuplicatedTiles(tempTiles);
            TestTcont[i] = TestTcont[i].concat(tempTiles);
        }
        // Generate the adjacency rules based on edges
        for (let i = 0; i < TestTcont.length; i++) {
            for (let j = 0; j < TestTcont[i].length; j++) {
                const tile = TestTcont[i][j];
                tile.analyze(TestTcont[i]);
            }
        }
        context.setAllTileClass(TestTcont);
    }

    const preload = (p5) => {
        for (let i = 0; i < tileSet.length; i++) {
            const tempdata = [];
            for (let j = 0; j < tileSet[i].tile.length; j++) {
                tempdata[j] = p5.loadImage(tileSet[i].tile[j].imgURL)
            }
            TesttileImages[i] = tempdata
        }
    }

    const setup = (p5, CanvasParentRef) => {
        setParent(CanvasParentRef);
        p5.createCanvas(500, 500).parent(CanvasParentRef);
        createTile(p5);
        grid = startOver(DIM, grid, context.TileClass);
    }

    function mousePressed(p5) {

        // move up

        for (let r = DIM; r >= 1; r--) {
            for (let c = 0; c < DIM; c++) {
                grid[c + ((r) * DIM)] = grid[c + ((r - 1) * DIM)];
            }
        }
        for (let c = 0; c < DIM; c++) {
            delete grid[c]
            grid[c] = new Cell(context.TileClass.length);
        }
    }
    function draw(p5) {
        if (context.TileClass.length == 0) {
            context.setTileClass(context.AllTileClass[Math.floor(Math.random() * tileSet.length)]);
        }

        drawGrid(p5, DIM, grid, context.TileClass)

        // Pick cell with least entropy
        let gridCopy = grid.slice();
        gridCopy = gridCopy.filter((a) => !a.collapsed);

        if (gridCopy.length == 0) {
            return;
        }
        gridCopy.sort((a, b) => {
            return a.options.length - b.options.length;
        });

        let len = gridCopy[0].options.length;
        let stopIndex = 0;
        for (let i = 1; i < gridCopy.length; i++) {
            if (gridCopy[i].options.length > len) {
                stopIndex = i;
                break;
            }
        }

        if (stopIndex > 0) gridCopy.splice(stopIndex);
        const cell = p5.random(gridCopy);

        cell.collapsed = true;
        const pick = p5.random(cell.options);
        if (pick === undefined) {
            grid = startOver(DIM, grid, context.TileClass);
            return;
        }
        cell.options = [pick];

        const nextGrid = [];
        for (let j = 0; j < DIM; j++) {
            for (let i = 0; i < DIM; i++) {
                let index = i + j * DIM;
                if (grid[index].collapsed) {
                    nextGrid[index] = grid[index];
                } else {
                    let options = new Array(context.TileClass.length).fill(0).map((x, i) => i);
                    // Look up
                    if (j > 0) {
                        let up = grid[i + (j - 1) * DIM];
                        let validOptions = [];
                        for (let option of up.options) {
                            let valid = context.TileClass[option].down;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look right
                    if (i < DIM - 1) {
                        let right = grid[i + 1 + j * DIM];
                        let validOptions = [];
                        for (let option of right.options) {
                            let valid = context.TileClass[option].left;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look down
                    if (j < DIM - 1) {
                        let down = grid[i + (j + 1) * DIM];
                        let validOptions = [];
                        for (let option of down.options) {
                            let valid = context.TileClass[option].up;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }
                    // Look left
                    if (i > 0) {
                        let left = grid[i - 1 + j * DIM];
                        let validOptions = [];
                        for (let option of left.options) {
                            let valid = context.TileClass[option].right;
                            validOptions = validOptions.concat(valid);
                        }
                        checkValid(options, validOptions);
                    }

                    // I could immediately collapse if only one option left?
                    nextGrid[index] = new Cell(options);
                }
            }
        }
        grid = nextGrid;
    }
    return (< Sketch key={"hool"} preload={preload} setup={setup} draw={draw} />)
};