import { configureStore, createSlice } from '@reduxjs/toolkit';
import storeDetailsSlice from './storeDetailsSlice';
import storeDetailsRefSlice from './storeDetailsRefSlice';



const configReduxStore = configureStore({
    reducer: {
        storeDetailsCommentSeqInConfigureStore: storeDetailsSlice.reducer,
        storeDetailsCommentRefInConfigureStore: storeDetailsRefSlice.reducer,
    }
})
export default configReduxStore;