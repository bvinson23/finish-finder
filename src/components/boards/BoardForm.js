import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getAllBases } from "../../modules/BaseManager";
import { getAllCarpets } from "../../modules/CarpetManager";
import { getAllPaints } from "../../modules/PaintManager";

export const BoardForm = () => {
    const [board, setBoard] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const [paints, setPaints] = useState([]);
    const [carpets, setCarpets] = useState([]);
    const [bases, setBases] = useState([]);

    const history = useHistory();

    const handleFieldChange = event => {
        const newBoard = { ...board }
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newBoard[event.target.id] = selectedVal
        setBoard(newBoard)
    }

    useEffect(() => {
        getAllPaints()
            .then(paintsFromAPI => {
                setPaints(paintsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllCarpets()
            .then(carpetsFromAPI => {
                setCarpets(carpetsFromAPI)
            });
    }, []);

    useEffect(() => {
        getAllBases()
            .then(basesFromAPI => {
                setBases(basesFromAPI)
            });
    }, []);

    const handleClickSave = event => {
        event.preventDefault()
        setIsLoading(true);

        const paintId = board.paintId
        const carpetId = board.carpetId
        const baseId = board.baseId

        if (paintId === 0 || carpetId === 0 || baseId === 0) {
            window.alert("Please select all fields")
        } else {
            addBoard(board)
                .then(() => history.push("/"))
        }
    }

    return (
        <form className="paintForm">
            {/* THIS IS WHERE I LEFT OFF!!!!!!!!!!!---------------------------------*/}
        </form>
    )
}