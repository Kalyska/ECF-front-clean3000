import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    interventions: JSON.parse(localStorage.getItem('interventions')) || []
};

export const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        addInt: (state, { payload }) => {
            const newInt = {
                id: new Date().toLocaleString(),
                tech: payload.tech,
                client: payload.client,
                text: payload.text
            }
            // Mise à jour du localStorage
            localStorage.setItem('interventions', JSON.stringify([...state.interventions, newInt]));
            // Mise à jour du state global
            state.interventions.push(newInt);
        },
    }
});

export const { addInt } = dataSlice.actions;

export default dataSlice.reducer;