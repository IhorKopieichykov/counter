import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        power: false,
        count: 0
    },
    reducers:{
        changeCount(state, action){
            console.log(state);
            console.log(action);
            if (state.power) {
                state.count += action.payload.value;
            }
        },
        togglePower(state, action){
            state.power = action.payload.power
        }
    }
});
export const {changeCount, togglePower} = counterSlice.actions;

export default counterSlice.reducer;