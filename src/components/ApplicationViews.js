import React from "react";
import { Route } from "react-router-dom";
import { BoardList } from "./boards/BoardList"
import { PaintList } from "./paints/PaintList";

export const ApplicationViews = () => {
    return (
        <>
            {/*Render the board list when http://lcoalhost:3000/ */}
            <Route exact path="/">
                <BoardList />
            </Route>

            {/*Render the paint list when http://lcoalhost:3000/paints */}
            <Route path="/paints">
                <PaintList />
            </Route>
        </>
    )
}