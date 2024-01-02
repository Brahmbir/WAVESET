import { useContext } from 'react';
import { DataContext } from '../../useDataContext';
import tileSet from "./all_tile"

import "./style/GenerateBar.css"

const D_tile = ({ togle, tileSetData, Index }) => {
    const context = useContext(DataContext);
    const press = () => {
        togle()
        context.setTileClass(context.AllTileClass[Index]);
    }
    return (
        <button className="Gtile" onClick={() => { press() }} >
            <img src={tileSetData.imgURL} alt="pic" />
        </button>
    )
}

const GenerateBar = () => {
    const context = useContext(DataContext);
    const close = () => {
        document.querySelector("#tileSet").setAttribute("data-show", 'false')
        document.querySelector("#dimen").setAttribute("data-show", 'false')
    }
    const togle = (id, hideId) => {
        document.querySelector(hideId).setAttribute("data-show", 'false')
        let temp = document.querySelector(id);
        const value = temp.getAttribute("data-show");
        if (value == "false") {
            temp.setAttribute("data-show", 'true');
        }
        else {
            temp.setAttribute("data-show", 'false');
        }
    }
    return (
        <div className="generateBar">
            <div id="tileSet" data-show="false" className="tileWindow">
                {tileSet.map((e, i) => <D_tile key={i} togle={() => { close() }} Index={i} tileSetData={e} />)}
            </div>
            <div id="dimen" data-show="false" className="range">
                < input type="range" orient="vertical" value={context.dimension} min={2} max={50} onChange={(e) => { context.setDimension(e.target.value) }} step={1} />
                <input type="number" value={context.dimension} min={2} max={50} onChange={(e) => { context.setDimension(e.target.value) }} />
            </div>
            <button className="rangeBtn" onClick={() => { togle("#dimen", "#tileSet") }}> Dimension </button>
            <button className="HoverTile" onClick={() => { togle("#tileSet", "#dimen") }}> Default </button>
            <button className='GenerateBtu' onClick={() => { close(); context.generate() }}> Generate </button>
        </div>
    );
}

export default GenerateBar;
