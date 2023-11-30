import React from "react";

export function Collection ({ images, name})  {
    return (
        <div className="gallery__collection">
            <img className="gallery__collection_big" src={images[0]} alt="Item" />
            <div className="gallery__collection_bottom">
                <img className="gallery__collection_mini" src={images[1]} alt="Item" />
                <img className="gallery__collection_mini" src={images[2]} alt="Item" />
                <img className="gallery__collection_mini" src={images[3]} alt="Item" />
            </div>
            <h4>{name}</h4>
        </div>
    );
}

