import React, { useEffect } from "react";
import { getAllPaints, getPaintById } from "../../modules/PaintManager";

export const PaintList = () => {
    const getPaints = () => {
        return getAllPaints().then(paintsfromAPI => {
            console.log(paintsfromAPI)
        });
    };

    useEffect(() => {
        getPaints();
    }, []);

    return (
        <div className="container-cards">
            We'll put some paints here soon...
        </div>
    )
}