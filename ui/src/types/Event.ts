import { VehicleAttributes } from "@metropole-garage/types/Vehicle"

export type ToggleUiEvent = {
    type: "toggle-ui",
    show: boolean
}

export type GetVehiclesEvent = {
    type: "get-vehicles",
    vehicles: VehicleAttributes[]
}

export type Event = { data: ToggleUiEvent | GetVehiclesEvent }