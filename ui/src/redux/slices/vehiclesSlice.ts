import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { VehicleState } from '@/types/Vehicle'

const initialState: VehicleState = {
    vehicles: []
}

export const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setVehicles(state, action: PayloadAction<VehicleState['vehicles']>) {
            state.vehicles = action.payload
        }
    }
})

export const {
    setVehicles
} = vehiclesSlice.actions

export default vehiclesSlice.reducer