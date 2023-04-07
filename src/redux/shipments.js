import { createSlice } from "@reduxjs/toolkit";

export const shipmentsSlice = createSlice({
    name: "shipments",
    initialState: {
        shipments: []
    },
    reducers: {
        delete: (state) => {
            state.filter((shipment) => shipment._id !== removedShipment);
        },
        update: (state, action) => {
            state.shipments -= 1;
        },
        incrementByAmount: (state, action) => {
            state.shipments += action.payload;
        }
    }
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = shipmentsSlice.actions;

export default shipmentsSlice.reducer;