import { Frown } from "lucide-react"

export const VehicleListEmpty = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 pb-6 h-full">
            <Frown
                size={68}
                className="text-primary"
            />

            <div className="text-slate-300 text-center font-bold space-y-1">
                <p>
                    Ops! Parece que você ainda não tem nenhum veículo na sua garagem.
                </p>
                <p>
                    Use o comando <span className="text-primary">/addcar [placa] [modelo]</span> para adicionar um <br /> novo veículo à sua garagem.
                </p>
            </div>
        </div>
    )
}