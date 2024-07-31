import { VehicleAttributes } from "@/types/Vehicle"
import { Vehicle } from "@/models/Vehicle"
import { ColorUtils } from "@/utils/colors"

export class VehicleController {
    /**
     * Retrieves a vehicle for the user by specifying the plate number and/or the owner's license.
     * 
     * @param {Object} params.data - Request data.
     * @param {string} [params.data.plate] - The plate number of the vehicle to retrieve.
     * @param {string} [params.data.ownerLicense] - The owner's license to filter by.
     * 
     * @returns {Promise<{ data?: VehicleAttributes, error?: string }>} - An object that contains the retrieved vehicle or an error message.
     */
    static async getVehicle({ data }: { data: { plate?: string, ownerLicense?: string } }): Promise<{ data?: VehicleAttributes; error?: string }> {
        const { plate, ownerLicense } = data

        // Validate data
        if (!plate) {
            return {
                error: "Por favor, insira a placa do veículo."
            }
        }

        // Create dynamic where
        let where: Partial<VehicleAttributes> = { plate }

        if (ownerLicense) {
            where.ownerLicense = data.ownerLicense
        }

        // Get vehicle
        const instance = await Vehicle.findOne({
            where
        })

        const vehicle = instance?.toJSON()

        // Check if the vehicle exists
        if (!vehicle) {
            return {
                error: "Essa placa não está associada à nenhum veículo."
            }
        }

        return {
            data: vehicle
        }
    }

    /**
     * Creates a new vehicle with the provided model, plate number, and owner's license.
     * 
     * @param {Object} params.data - Request data.
     * @param {string} [params.data.model] - The model of the vehicle to create.
     * @param {string} [params.data.plate] - The plate number of the vehicle to create.
     * @param {string} [params.data.ownerLicense] - The owner's license of the vehicle to create.
     * 
     * @returns {Promise<{ data?: VehicleAttributes, error?: string }>} - An object that contains the created vehicle or an error message.
     */
    static async createVehicle({ data }: { data: { model?: string, plate?: string, ownerLicense: string } }): Promise<{ data?: VehicleAttributes; error?: string; }> {
        const { model, plate, ownerLicense } = data

        // Validate data
        if (!plate) {
            return {
                error: "Por favor, insira a placa do veículo."
            }
        }

        if (plate.length > 8) {
            return {
                error: "A placa deve ter no máximo 8 caracteres."
            }
        }

        if (!model) {
            return {
                error: "Por favor, insira o modelo do veículo."
            }
        }

        // Check if the vehicle already exists
        const vehicleExists = await Vehicle.count({ where: { plate } })

        if (vehicleExists > 0) {
            return {
                error: "A placa já existe e está associada à outro veículo."
            }
        }

        // Create the vehicle
        const instance = await Vehicle.create({
            model,
            plate,
            ownerLicense,
            colorPrimary: ColorUtils.generateRandomRGBColor(),
            colorSecondary: ColorUtils.generateRandomRGBColor()
        })

        const vehicle = instance.toJSON()

        return {
            data: vehicle
        }
    }

    /**
     * Retrieves all vehicles associated with a specific owner using the owner's license.
     * 
     * @param {Object} [params.data] - Request data.
     * @param {string} [params.data.ownerLicense] - The owner's license to filter by.
     * 
     * @returns {Promise<{ data: VehicleAttributes[] }>} - An object that contains the retrieved vehicles.
     */
    static async getVehicles({ data }: { data: { ownerLicense: string } }): Promise<{ data: VehicleAttributes[]; }> {
        const { ownerLicense } = data

        const instances = await Vehicle.findAll({
            where: {
                ownerLicense
            }
        })

        const vehicles = instances.map(instance => instance.toJSON())

        return {
            data: vehicles
        }
    }
}