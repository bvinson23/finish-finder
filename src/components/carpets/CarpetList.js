import React, { useEffect, useState } from "react";
import { getAllCarpets } from "../../modules/CarpetManager";
import { CarpetCard } from "./CarpetCard";

export const CarpetList = () => {
    const [carpets, setCarpets] = useState([]);

    const getCarpets = () => {
        return getAllCarpets().then(carpetsfromAPI => {
            setCarpets(carpetsfromAPI)
        });
    };

    useEffect(() => {
        getCarpets();
    }, []);

    return (
        <div className="container-cards">
            <div className="page-title">
                <h2>Carpets</h2>
            </div>
            {carpets.map(carpet => <CarpetCard key={carpet.id} carpet={carpet} />)}
        </div>
    )
}