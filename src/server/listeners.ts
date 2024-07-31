import { VehicleController } from "@/controllers/VehicleController";

/**
 * Listener to fetch the player's vehicles from the database.
 * 
 * This function listens for a specific event to retrieve the player's vehicles. 
 * Once the data is fetched from the database, an event is emitted, 
 * sending the list of vehicles back to the client.
 * 
 */
onNet("garage:get-vehicles", async () => {
    const playerSrc = source;

    // Get player Identifier
    const ownerLicense = getPlayerIdentifiers(source).find(identifier => identifier.includes('license:'))
    if (!ownerLicense) return;

    const vehicles = await VehicleController.getVehicles({
        data: {
            ownerLicense
        }
    })

    // Send the list of vehicles back to the client
    emitNet('garage:get-vehicles-callback', playerSrc, vehicles.data)
})