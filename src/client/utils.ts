import { VehicleAttributes } from "@/types/Vehicle";
import { PromiseUtils } from "@/utils/promises";

export class Utils {
    /**
     * Spawns a new vehicle in the game based on the provided vehicle attributes.
     * 
     * This function checks if the vehicle model exists and is valid, then requests and loads the model.
     * After the model is loaded, it creates the vehicle at the player's current position, applies custom
     * colors, sets the number plate, and puts the player in the driver's seat.
     * 
     * @param {VehicleAttributes} data - The attributes of the vehicle to spawn.
     * 
     * @returns {Promise<void>} - A promise that resolves when the vehicle is successfully spawned and customized.
     */
    static async spawnVehicle(data: VehicleAttributes): Promise<void> {
        const hash = GetHashKey(data.model);

        // Check if the model actually exists
        if (!IsModelInCdimage(hash) || !IsModelAVehicle(hash)) {
            emit('chat:addMessage', {
                color: [255, 0, 0],
                multiline: true,
                args: [`[GARAGEM]`, `O modelo ${data.model} não existe.`]
            });
            return;
        }

        RequestModel(hash);
        while (!HasModelLoaded(hash)) {
            await PromiseUtils.delay(500);
        }

        const ped = PlayerPedId();
        const [x, y, z] = GetEntityCoords(ped, true);
        const vehicle = CreateVehicle(hash, x, y, z, GetEntityHeading(ped), true, false);

        // Set the vehicle customizations
        const colorPrimary = data.colorPrimary.split(",");
        const colorSecondary = data.colorSecondary.split(",");

        SetVehicleNumberPlateText(vehicle, data.plate);
        SetVehicleCustomPrimaryColour(vehicle, +colorPrimary[0], +colorPrimary[1], +colorPrimary[2]);
        SetVehicleCustomSecondaryColour(vehicle, +colorSecondary[0], +colorSecondary[1], +colorSecondary[2]);

        // Set the player into the drivers seat of the vehicle
        SetPedIntoVehicle(ped, vehicle, -1);

        // Allow the game engine to clean up the vehicle and model if needed
        SetEntityAsNoLongerNeeded(vehicle);
        SetModelAsNoLongerNeeded(data.model);
    }

    /**
     * Toggles the visibility and focus of the NUI.
     * 
     * This function sends a message to the NUI to show or hide the user interface and sets the focus
     * of the NUI to match the visibility state.
     * 
     * @param {Object} params - The parameters for toggling the NUI.
     * @param {boolean} params.show - A boolean indicating whether to show (`true`) or hide (`false`) the NUI.
     * 
     * @returns {void} - This function does not return any value.
     */
    static toggleNUI(params: { show: boolean }): void {
        // Toggle NUI Visibility to on/off
        SendNUIMessage({
            type: "toggle-ui",
            show: params.show
        });

        // Toggle NUI Focus to on/off
        SetNuiFocus(params.show, params.show);
    }
}
