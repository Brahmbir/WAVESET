import React from 'react';
import { useState, useContext } from 'react';
import { TileDataContext } from '../../../useDataContext';

const TileCard = ({ TileData }) => {

    const Tcontext = useContext(TileDataContext);

    return (
        <div className='tileCard' >
            <div className="name">
                <input
                    type="text"
                    placeholder='Set Tile Name'
                    onChange={(e) => { Tcontext.setNameOfTile(TileData.tileID, e.target.value) }}
                    defaultValue={TileData.name} />
                <button
                    onClick={() => { Tcontext.deleteTile(TileData.tileID) }}
                > del </button>
            </div>
            <div className="TileImage">
                <fieldset className='TileImageInput'>
                    <input type="text" defaultValue={TileData.rules[0]} onChange={(e) => { Tcontext.setRuleOfTile(TileData.tileID, 0, e.target.value) }} className='tileCode Tup' />
                    <input type="text" defaultValue={TileData.rules[1]} onChange={(e) => { Tcontext.setRuleOfTile(TileData.tileID, 1, e.target.value) }} className='tileCode Tright' />
                    <input type="text" defaultValue={TileData.rules[2]} onChange={(e) => { Tcontext.setRuleOfTile(TileData.tileID, 2, e.target.value) }} className='tileCode Tdown' />
                    <input type="text" defaultValue={TileData.rules[3]} onChange={(e) => { Tcontext.setRuleOfTile(TileData.tileID, 3, e.target.value) }} className='tileCode Tleft' />
                    <div className="tileImg">
                        <input
                            // hidden
                            onChange={(e) => { Tcontext.setImgOfTile(TileData.tileID, URL.createObjectURL(e.target.files[0])) }}
                            data-enter="false"
                            type="file"
                            accept=".png,.jpg"
                        />
                        <img src={TileData.imgURL} />
                    </div>
                </fieldset>
            </div>
            <div className="rotate">
                <input defaultValue={TileData.rotate} name='rotate' type="checkbox" onChange={() => { Tcontext.setRotateOfTile(TileData.tileID) }} />
                <label htmlFor="rotate">Can Tile Rotate ? </label>
            </div>
        </div>
    );
};

export default TileCard;
