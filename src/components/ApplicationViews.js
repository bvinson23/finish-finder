import React from "react";
import { Route } from "react-router-dom";
import { BoardList } from "./boards/BoardList"

export const ApplicationViews = () => {
    return (
        <>
            {/*Render the board list when http://lcoalhost:3000/ */}
            <Route exact path="/">
                <BoardList />
            </Route>
        </>
    )
}