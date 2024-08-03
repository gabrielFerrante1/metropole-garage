import { fetchNui } from "@/utils/fetchNui"
import { VehicleAttributes } from "@metropole-garage/types/Vehicle"
import { Frown } from "lucide-react"
import { useState } from "react"

type Props = {
    data: VehicleAttributes
}

export const VehicleCard = ({ data }: Props) => {
    const [isImageLoadFailed, setIsImageLoadFailed] = useState(false)

    const handleSpawnVehicle = () => fetchNui('spawn-vehicle', data)

    const handleOnError = () => setIsImageLoadFailed(true)

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg drop-shadow-2xl shadow-primary py-6 px-5 h-[420px] w-64">
            <div className="flex flex-col justify-between h-full">
                <div className="space-y-6">
                    <h2 className="text-xl font-extrabold text-slate-300 truncate capitalize">
                        {data.model}
                    </h2>

                    <div className="h-28 flex justify-center items-center">
                        {!isImageLoadFailed ?
                            <img
                                src={`https://docs.fivem.net/vehicles/${data.model}.webp`}
                                alt={data.model}
                                className="max-h-28"
                                onError={handleOnError}
                            />
                            :
                            <Frown
                                size={68}
                                className="text-primary"
                            />
                        }

                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <span className="text-slate-400">Placa:</span>
                        <span className="text-slate-300 truncate uppercase font-semibold">
                            {data.plate}
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-slate-400">Cor Primária:</span>
                        <span
                            className="size-4 rounded border border-gray-500"
                            style={{ backgroundColor: `rgb(${data.colorPrimary})` }}
                        ></span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-slate-400">Cor Secundária:</span>
                        <span
                            className="size-4 rounded border border-gray-500"
                            style={{ backgroundColor: `rgb(${data.colorSecondary})` }}
                        ></span>
                    </div>
                </div>

                <button
                    className=" bg-primary text-slate-900 font-bold py-2 px-4 rounded w-full transition-all active:scale-95 outline-none"
                    onClick={handleSpawnVehicle}
                >
                    Spawnar
                </button>
            </div>
        </div>
    )
}