import { userReducer } from '../reducers/builderReducer'
import { receiptReducer } from '../reducers/receiptReducers'
const { configureStore } = require("@reduxjs/toolkit");

const reducer = {
    builder: userReducer,
    receipt: receiptReducer
};
const store = configureStore({
    reducer,
    devTool: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;