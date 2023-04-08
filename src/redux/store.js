import { configureStore } from '@reduxjs/toolkit'
import shipmentsReducer from './shipments';

export const store = configureStore({
    reducer: {
        shipments: shipmentsReducer
    },
})