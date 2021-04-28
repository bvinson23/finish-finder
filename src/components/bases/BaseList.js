import React, { useEffect, useState } from "react";
import { getAllBases } from "../../modules/BaseManager";
import { BaseCard } from "./BaseCard";
import "./Base.css";

export const BaseList = () => {
    const [bases, setBases] = useState([]);

    const getBases = () => {
        return getAllBases().then(basesfromAPI => {
            setBases(basesfromAPI)
        });
    };

    useEffect(() => {
        getBases();
    }, []);

    return (
        <div className="container-cards">
            <h2>VINYL BASES</h2>
            {bases.map(base => <BaseCard key={base.id} base={base} />)}
        </div>
    )
}