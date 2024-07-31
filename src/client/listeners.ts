import type { VehicleAttributes } from "@/types/Vehicle";
import { Utils } from "@/client/utils";

/**
 * Listener for spawning a vehicle.
 * The vehicle will be created and configured according to the specifications 
 * provided in `data`.
 */
onNet("garage:spawn-vehicle", (data: VehicleAttributes) => Utils.spawnVehicle(data))


/**
 *  Receives the player's list of vehicles and sends a NUI message to the client with the data received
 */
onNet("garage:get-vehicles-callback", (data: VehicleAttributes[]) => {
    SendNUIMessage({
        type: "get-vehicles",
        vehicles: data
    })
})