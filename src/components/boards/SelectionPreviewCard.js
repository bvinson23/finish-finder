import React, { useState } from "react";

export const SelectionPreviewCard = ({ paint, base, carpet }) => {

    return (
        <div className="form-group">
                <aside className="selections-container">
                    <h3>Selections</h3>
                    <div className="selection__paint">
                        <h4>Paint</h4>
                        <p>{paint.name}</p>
                        <div className="selection__image">
                            <img src={paint.image} alt={paint.name}></img>
                        </div>
                    </div>
                    <div className="selection__base">
                        <h4>Vinyl Base</h4>
                        <p>{base.name}</p>
                        <div className="selection__image">
                            <img src={base.image} alt={base.name}></img>
                        </div>
                    </div>
                    <div className="selection__carpet">
                        <h4>Carpet</h4>
                        <p>{carpet.name}</p>
                        <div className="selection__image">
                            <img src={carpet.image} alt={carpet.name}></img>
                        </div>
                    </div>
                </aside>
            </div>
    )
}