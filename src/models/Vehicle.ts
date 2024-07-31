import { sequelize } from "@/config/db.config";
import { VehicleAttributes } from "@/types/Vehicle";
import { DataTypes, Model, Optional } from "sequelize";

// Define the Vehicle model
export class Vehicle extends Model<VehicleAttributes, Optional<VehicleAttributes, 'id'>> implements VehicleAttributes {
    declare id: number;
    declare model: string;
    declare plate: string;
    declare colorPrimary: string;
    declare colorSecondary: string;
    declare ownerLicense: string;
}

// Create the Vehicle model
Vehicle.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false
        },
        plate: {
            type: DataTypes.STRING(8),
            unique: true,
            allowNull: false
        },
        colorPrimary: {
            type: DataTypes.STRING(20),
            defaultValue: '0,0,0',
            allowNull: false
        },
        colorSecondary: {
            type: DataTypes.STRING(20),
            defaultValue: '255,0,0',
            allowNull: false
        },
        ownerLicense: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
    }
);

// Synchronize the model with the database
Vehicle.sync();