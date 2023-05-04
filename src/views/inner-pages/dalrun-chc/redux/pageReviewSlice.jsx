import { configureStore, createSlice } from '@reduxjs/toolkit';



const pageReviewSlice = createSlice({
    name: "namePageReview",
    initialState: {shoereviewdetailSeq: 0},
    reducers: {
        pageDetailSeq: (state, action) => {
            console.log("  @@ console.log(action); ", action);
            // state.shoereviewdetailSeq = action.sliInqRef;
            state.shoereviewdetailSeq = action.seq;
        }
    }
})

export default pageReviewSlice;