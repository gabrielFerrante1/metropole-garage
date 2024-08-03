import { useAppSelector } from "@/redux/hooks"
import { VehicleCard } from "./VehicleCard"

export const VehicleList = () => {
    const { vehicles } = useAppSelector(state => state.vehicles)

    return (
        <div className="grid p-6 grid-cols-4 justify-center pl-9 items-center gap-8">
            {vehicles.map((vehicle, index) => (
                <div key={index}>
                    <VehicleCard
                        data={vehicle}
                    />
                </div>
            ))}
        </div>
    )
}  