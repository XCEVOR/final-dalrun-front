import { configureStore, createSlice } from '@reduxjs/toolkit';



const countReduxSlice = createSlice({
    name: "myCounterInSlice",
    initialState: {number: 0},
    reducers: {
        PLUS: (state, action) => {
            console.log("  @@ console.log(action); ", action);
            state.number = state.number + action.step;
        }
    }
})

export default countReduxSlice;
// export const {PLUS} = countReduxSlice.actions;  // TEST REDUX PAYLOAD