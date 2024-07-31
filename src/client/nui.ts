import { Utils } from "@/client/utils"

/**
 * NUI Callback to close the UI through the frontend
 */
RegisterNuiCallback('close-ui', () => Utils.toggleNUI({ show: false }))


/**
 * NUI Callback to get the player's vehicles
 */
RegisterNuiCallback('get-vehicles', () => emitNet("garage:get-vehicles"))