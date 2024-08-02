import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '@/types/App'

const initialState: AppState = {
    isVisible: false
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsVisible: (state, action: PayloadAction<AppState['isVisible']>) => {
            state.isVisible = action.payload
        }
    }
})

export const {
    setIsVisible
} = appSlice.actions

export default appSlice.reducer