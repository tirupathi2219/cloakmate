import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userData: null
    },
    reducers: {
        addUser: (state, action) => {
            console.log(action.payload)
            state.userData = action.payload
        }
    }
})
export const { addUser } = userSlice.actions
export default userSlice.reducer;