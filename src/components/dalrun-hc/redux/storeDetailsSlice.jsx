import { configureStore, createSlice } from '@reduxjs/toolkit';



const storeDetailsSlice = createSlice({
    name: "storeDetailsCommentSeqInSlice",
    initialState: {sliceInqSeq: 0},
    reducers: {
        CommentSeq: (state, action) => {
            console.log("  @@ console.log(action); ", action);
            state.sliceInqSeq = state.sliceInqSeq + action.seq;
        }
    }
})

export default storeDetailsSlice;