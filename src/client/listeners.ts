import type { VehicleAttributes } from "@/types/Vehicle";
import { Utils } from "@/client/utils";

/**
 * Listener for spawning a vehicle.
 * The vehicle will be created and configured according to the specifications 
 * provided in `data`.
 */
onNet("garage:spawn-vehicle", (data: VehicleAttributes) => Utils.spawnVehicle(data))


/**
 * Checks for any changes in the state of the player's vehicles and sends an updated list of vehicles,
 * which is received as a value from the handle function, to the NUI.
 */
AddStateBagChangeHandler("player-vehicles", '', (bagName: string, key: string, value: VehicleAttributes[]) => {
    SendNUIMessage({
        type: "get-vehicles",
        vehicles: value
    })
});