import { configureStore, createSlice } from '@reduxjs/toolkit';
import storeDetailsSlice from './storeDetailsSlice';



const configReduxStore = configureStore({
    reducer: {
        storeDetailsCommentSeqInConfigureStore: storeDetailsSlice.reducer
    }
})
export default configReduxStore;