import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const getShipments = createAsyncThunk(
    'shipmentsList/getShipments', async () => {
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
        delete: (state) => {
            state.filter((shipment) => shipment._id !== removedShipment);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getShipments.fulfilled, (state, action) => {
            state.shipments = action.payload;
        })
    }
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = shipmentsSlice.actions;

export const selectShipments = state => state.shipmentsList.shipments;

export default shipmentsSlice.reducer;