import { createContext, useReducer } from "react";
import tileSet from "./components/GenerateBar/all_tile";

let canvasData = {
    dimension: 15,
    generate: false,
    TileClass: [],
    AllTileClass: [],
    // t: tileSet[Math.floor(Math.random() * tileSet.length)].tile
}
const actions = {
    SET_DIMENSION: "SET_DIMENSION",
    GENERATE: "GENERATE",
    SET_TILECLASS: "SET_TILECLASS",
    SET_ALLTILECLASS: "SET_ALLTILECLASS",

};
const reducer = (state, action) => {
    switch (action.type) {
        case actions.SET_DIMENSION: {
            return { ...state, dimension: action.dimension };
        }
        case actions.GENERATE: {
            return { ...state, generate: !state.generate };
        }
        case actions.SET_TILECLASS: {
            return { ...state, TileClass: action.tileClass };
        }
        case actions.SET_ALLTILECLASS: {
            return { ...state, AllTileClass: action.allTileClass };
        }
        default:
            return state;
    }
};

export const DataContext = createContext()

export function CanvasDataContext({ children }) {

    const [state, dispatch] = useReducer(reducer, canvasData);

    const value = {
        ...state,
        setDimension: (dimension) => {
            dispatch({ type: actions.SET_DIMENSION, dimension })
        },
        generate: () => {
            dispatch({ type: actions.GENERATE })
        },
        setTileClass: (tileClass) => {
            dispatch({ type: actions.SET_TILECLASS, tileClass });
        },
        setAllTileClass: (allTileClass) => {
            dispatch({ type: actions.SET_ALLTILECLASS, allTileClass });
        },
    };

    return (
        <DataContext.Provider value={value} >
            {children}
        </DataContext.Provider>
    )
}