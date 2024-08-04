import { VehicleController } from "@/controllers/VehicleController";

/**
 * Listener to fetch the player's vehicles from the database.
 * 
 * This function listens for a specific event to recover the player's vehicles. 
 * Once the data is fetched from the database, a State Bag stores the player's vehicles are added directly to the Player entity
 * 
 */
onNet("garage:get-vehicles", async () => {
    const playerSrc = global.source;

    // Get player Identifier
    const ownerLicense = getPlayerIdentifiers(playerSrc).find(identifier => identifier.includes('license:'))
    if (!ownerLicense) return;

    const vehicles = await VehicleController.getVehicles({
        data: {
            ownerLicense
        }
    })

    // Add vehicles directly as a state owned by the Player entity
    Entity(GetPlayerPed(playerSrc.toString())).state['player-vehicles'] = vehicles.data
})