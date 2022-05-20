import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./DataSlice";


const store = configureStore({
    reducer:{
        user:dataSlice,
    }
})

export default store