import { Utils } from "@/client/utils"
import { VehicleAttributes } from "@/types/Vehicle"

/**
 * NUI Callback to close the UI through the frontend
 */
RegisterNuiCallback('close-ui', () => Utils.toggleNUI({ show: false }))


/**
 * NUI Callback to get the player's vehicles
 */
RegisterNuiCallback('get-vehicles', () => emitNet("garage:get-vehicles"))


/**
 * NUI Callback to spawn a vehicle
 */
RegisterNuiCallback('spawn-vehicle', (data: VehicleAttributes) => {
    // Close the UI
    Utils.toggleNUI({ show: false })

    // Spawn the vehicle
    Utils.spawnVehicle(data)
})