import { VehicleAttributes } from "@metropole-garage/types/Vehicle"

type Props = {
    data: VehicleAttributes
}

export const VehicleCard = ({ data }: Props) => {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-lg drop-shadow-2xl shadow-primary py-6 px-5 h-72 w-60">
            <div className="flex flex-col justify-between h-full">
                <h2 className="text-xl font-extrabold text-slate-300 truncate capitalize">
                    {data.model}
                </h2>

                <div className="space-y-4 mb-4">
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
                    className="bg-primary text-slate-900 font-bold py-2 px-4 rounded w-full transition-all active:scale-95 outline-none"

                >
                    Spawnar
                </button>
            </div>
        </div>
    )
}