import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { BoardCard } from "./boards/BoardCard";
import "./FinishFinder.css";

export const FinishFinder = () => {
  return (
    <>
      <h2>Boards</h2>
      <article className="boards">
        <BoardCard />
        <BoardCard />
      </article>
    </>
  )
}
