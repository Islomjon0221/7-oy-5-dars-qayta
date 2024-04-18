import { configureStore } from "@reduxjs/toolkit";
import counter from "../redux/counterSlice"
import users from "../redux/userSlice"

export const store = configureStore({
    reducer: {
        counter: counter,
        user: users
    }
})