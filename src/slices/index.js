import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    interventions: JSON.parse(localStorage.getItem('interventions')) || []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addInt: (state, { payload }) => {
            // Mise à jour du localStorage
            localStorage.setItem('interventions', JSON.stringify([...state.interventions, payload]));
            // Mise à jour du state global
            state.interventions.push(payload);
        },
    }
});

export const { addInt } = dataSlice.actions;

export default dataSlice.reducer;