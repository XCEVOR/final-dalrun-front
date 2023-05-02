import { configureStore, createSlice } from '@reduxjs/toolkit';
import countReduxSlice from './countReduxSlice';



const myReduxStore = configureStore({
    reducer: {
        myCounterInConfigureStore: countReduxSlice.reducer
    }
})
export default myReduxStore;