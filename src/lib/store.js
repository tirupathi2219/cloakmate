const { configureStore } = require("@reduxjs/toolkit");
import userReducer from './slices/userslice'

const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store