import { useContext } from "react";
import TileCard from "./subComp/TileCard";
import { DataContext, TileDataContext } from "../../useDataContext";

const Menu = () => {
    const context = useContext(DataContext);
    const Tcontext = useContext(TileDataContext);

    return (
        <div className="settings">
            <div className="dimension">
                <fieldset>
                    <legend>Range</legend>
                    <input type="range" value={context.dimension} min={2} max={50} onChange={(e) => { context.setDimension(e.target.value) }} step={1} />
                    <input type="number" value={context.dimension} min={2} max={50} onChange={(e) => { context.setDimension(e.target.value) }} />
                </fieldset>
            </div>
            <div className="tileSection">
                <div className="tileCon">
                    {Tcontext.t.map((value, index) => <TileCard key={index} TileData={value} />)}
                    <button className="tbutton" onClick={() => Tcontext.addTile()} >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;
