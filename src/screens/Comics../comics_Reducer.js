import { createReducer } from "@reduxjs/toolkit";
import actionComic from "./comics_Actions";

let {getComics}=actionComic;

let initialState={
    comic:"",
    message:''
};

let reducer=createReducer(
    initialState,
    (builder)=>{
        builder.addCase(
            getComics.fulfilled,
            (state,action)=>{
                const stateNew = {
                    comics : action.payload.res.comic, 
                    message : action.payload
                }
                return stateNew
            }
        )
    }
)
export default reducer