import React, { useEffect, useState } from "react";
import { getAllPaints } from "../../modules/PaintManager";
import { PaintCard } from "./PaintCard";

export const PaintList = () => {
    const [paints, setPaints] = useState([]);

    const getPaints = () => {
        return getAllPaints().then(paintsfromAPI => {
            setPaints(paintsfromAPI)
        });
    };

    useEffect(() => {
        getPaints();
    }, []);

    return (
        <div className="container-cards">
            <h2>Paints</h2>
            {paints.map(paint => <PaintCard key={paint.id} paint={paint} />)}
        </div>
    )
}