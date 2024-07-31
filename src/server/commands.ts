import { VehicleController } from "@/controllers/VehicleController";

/**
 * Creates a vehicle based on the license plate. (Admin only)
 */
RegisterCommand("car", async (source: number, args: string[], rawCommand: string) => {
    const [plate] = args

    const vehicle = await VehicleController.getVehicle({
        data: {
            plate
        }
    })

    // Show an error message if there is one
    if (vehicle.error || !vehicle.data) {
        emitNet('chat:addMessage', source, {
            color: [255, 0, 0],
            multiline: true,
            args: ["[GARAGEM]", vehicle.error]
        })
        return;
    }

    // Spawn the vehicle to the player'
    emitNet("garage:spawn-vehicle", source, vehicle.data)
}, true)


/**
 * Associate a vehicle with an owner (All Players)
 */
RegisterCommand("addcar", async (source: number, args: string[], rawCommand: string) => {
    const [plate, model] = args

    const ownerLicense = getPlayerIdentifiers(source).find(identifier => identifier.includes('license:'))
    if (!ownerLicense) return;

    const newVehicle = await VehicleController.createVehicle({
        data: {
            plate,
            model,
            ownerLicense
        }
    })

    // Show an error or success message
    if (newVehicle.error) {
        emitNet('chat:addMessage', source, {
            color: [255, 0, 0],
            multiline: true,
            args: ["[GARAGEM]", newVehicle.error]
        })

        return;
    } else {
        emitNet('chat:addMessage', source, {
            color: [0, 255, 0],
            multiline: true,
            args: ["[GARAGEM]", "Veículo adicionado com sucesso!"]
        })
    }

    // Refresh the vehicle list
    const vehicles = await VehicleController.getVehicles({
        data: {
            ownerLicense
        }
    })

    // Send the list of vehicles to the client
    emitNet('garage:get-vehicles-callback', source, vehicles.data)
}, false)