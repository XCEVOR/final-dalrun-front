import { configureStore, createSlice } from '@reduxjs/toolkit';
import storeDetailsSlice from './storeDetailsSlice';
import storeDetailsRefSlice from './storeDetailsRefSlice';

import pageDetailSeqInStore from "./pageReviewSlice";



const configReduxStore = configureStore({
    reducer: {
        storeDetailsCommentSeqInConfigureStore: storeDetailsSlice.reducer,
        storeDetailsCommentRefInConfigureStore: storeDetailsRefSlice.reducer,

        pageDetailSeq: pageDetailSeqInStore.reducer,
    }
})
export default configReduxStore;