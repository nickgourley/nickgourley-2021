import React from "react";

import { Item as Asset } from "./item";

const AssetsBlock = ({assets, setAssets}) => {

    const handleAddAsset = () => {
        setAssets(prevState => {
            const newAsset = new Asset("", "");
            const newAssets = [...prevState];
            newAssets.push(newAsset);
            return newAssets;
        })
    }

    const handleUpdateAssetDescription = (asset, index, newDescription) => {
        setAssets(prevState => {
            const newAssets = [...prevState];
            newAssets[index] = new Asset(newDescription, asset.value, asset.id);
            return newAssets;
        })
    }

    const handleUpdateAssetValue = (asset, index, newValue) => {
        setAssets(prevState => {
            const newAssets = [...prevState];
            newAssets[index] = new Asset(asset.description, newValue, asset.id);
            return newAssets;
        })
    }

    const handleDeleteAsset = (index) => {
        setAssets(prevState => {
            let newAssets = [...prevState];
            newAssets.splice(index, 1);
            return newAssets;
        })
    }

    return (
        <div>
        
        <div>
            {assets.map((asset, index) => {
                return (<div key={asset.id}><input type="text" onChange={(e) => handleUpdateAssetDescription(asset, index, e.target.value)}/><input type="text" onChange={(e) => handleUpdateAssetValue(asset, index, e.target.value)}/><button onClick={() => handleDeleteAsset(index)}>X</button></div>);
            })}
        </div>
            <button onClick={handleAddAsset}>Add New</button>
        </div>
    );
}



export default AssetsBlock;