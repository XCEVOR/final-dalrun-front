import { configureStore, createSlice } from '@reduxjs/toolkit';



const storeDetailsRefSlice = createSlice({
    name: "storeDetailsCommentRefInSlice",
    initialState: {sliceInqRef: 0},
    reducers: {
        CommentRef: (state, action) => {
            console.log("  @@ console.log(action); ", action);
            state.sliceInqRef = action.sliInqRef;
        }
    }
})

export default storeDetailsRefSlice;