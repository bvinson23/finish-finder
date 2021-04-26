import React, { useEffect, useState } from "react";
import { getAllCarpets } from "../../modules/CarpetManager";
import { CarpetCard } from "./CarpetCard";

export const CarpetList = () => {
    const [carpets, setCarpets] = useState([]);

    const getCarpets = () => {
        return getAllCarpets().then(carpetsfromAPI => {
            setBases(carpetsfromAPI)
        });
    };

    useEffect(() => {
        getCarpets();
    }, []);

    return (
        <div className="container-cards">
            <h2>Carpets</h2>
            {carpets.map(carpet => <CarpetCard key={carpet.id} carpet={carpet} />)}
        </div>
    )
}