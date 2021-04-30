import React from "react";
import { Route } from "react-router-dom";
import { BoardList } from "./boards/BoardList";
import { PaintList } from "./paints/PaintList";
import { BaseList } from "./bases/BaseList";
import { CarpetList } from "./carpets/CarpetList";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { PaintForm } from "./paints/PaintForm";
import { BaseForm } from "./bases/BaseForm";
import { CarpetForm } from "./carpets/CarpetForm";

export const ApplicationViews = () => {
    return (
        <>
            {/*Render the board list when http://lcoalhost:3000/ */}
            <Route exact path="/">
                <BoardList />
            </Route>

            {/*Render the form for creating the paint section of the board when http://localhost:3000/boards/create/paint */}
            <Route path="/boards/create/paint">
                <PaintForm />
            </Route>

            {/*Render the form for creating the base section of the board when http://localhost:3000/boards/create/base */}
            <Route path="/boards/create/base">
                <BaseForm />
            </Route>

            {/*Render the form for creating the carpet sectioin of the board when http://localhost:3000/boards/create/carpet */}
            <Route path="/boards/create/carpet">
                <CarpetForm />
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

            {/*Render the login page when http://localhost:3000/login */}
            <Route path="/login">
                <Login />
            </Route>

            {/*Render the register page when http://localhost:3000/register */}
            <Route path="/register">
                <Register />
            </Route>
        </>
    )
}