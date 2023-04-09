import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from 'axios';

export const getShipments = createAsyncThunk(
    'getShipments', async () => {
        try {
            const response = await axios.get("shipments.js");
            response.data.forEach((item, i) => {
                item._id = i + 1;
            });
            return response.data;

        } catch (error) {
            alert(error.message);
        }
    }
)

export const shipmentsSlice = createSlice({
    name: "shipments",
    initialState: {
        shipments: []
    },
    reducers: {
        deleteShipment: (state, action) => {
            state.shipments = state.shipments.filter((shipment) => shipment._id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getShipments.fulfilled, (state, action) => {
            state.shipments = action.payload;
        })
    }
});


export const { deleteShipment } = shipmentsSlice.actions;
export default shipmentsSlice.reducer;