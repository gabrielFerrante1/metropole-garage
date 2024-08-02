import { configureStore } from '@reduxjs/toolkit'
import vehiclesSlice from '@/redux/slices/vehiclesSlice'
import appSlice from '@/redux/slices/appSlice'

export const store = configureStore({
    reducer: {
        app: appSlice,
        vehicles: vehiclesSlice
    }
})

export type RootState = ReturnType<typeof store.getState>

// Infer the `AppDispatch` and `AppStore` types from the store itself
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store