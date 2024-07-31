import { Utils } from "@/client/utils"

/**
 * Toggle the garage UI (All Players)
 */
RegisterCommand("garagem", async (source: number, args: string[], rawCommand: string) => {
    const nuiFocused = IsNuiFocused()

    // Toggle NUI Visibility
    Utils.toggleNUI({ show: !nuiFocused })
}, false)
