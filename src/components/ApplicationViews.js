import React from "react";
import { Route } from "react-router-dom";
import { BoardList } from "./boards/BoardList";
import { PaintList } from "./paints/PaintList";
import { BaseList } from "./bases/BaseList";
import { CarpetList } from "./carpets/CarpetList";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

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

            {/*Render the base list when http://lcoalhost:3000/bases */}
            <Route path="/bases">
                <BaseList />
            </Route>
            
            {/*Render the carpet list when http://lcoalhost:3000/carpets */}
            <Route path="/carpets">
                <CarpetList />
            </Route>

            {/*Render the login/register page when http://localhost:3000/login */}
            <Route path="/login">
                <Login />
                <Register />
            </Route>
        </>
    )
}