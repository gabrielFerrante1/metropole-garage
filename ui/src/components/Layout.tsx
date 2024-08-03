import BannerBg from '@/assets/banner-bg.png'
import HeaderBg from '@/assets/top-header-bg.svg'
import { fetchNui } from '@/utils/fetchNui'
import { X } from 'lucide-react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
    const handleCloseUI = () => fetchNui('close-ui')

    return (
        <div className="size-full duration-0 bg-slate-950 max-w-7xl max-h-[70%] rounded-lg border-4 border-primary  drop-shadow-2xl ">
            <img
                src={HeaderBg}
                alt="Header Background"
                className='absolute h-24 -mt-12 left-1/2 -translate-x-1/2 z-20'
            />

            <div className='flex flex-col h-full'>
                <div className='flex flex-col items-center relative'>
                    <img
                        src={BannerBg}
                        alt="Metrópole GG Banner"
                        className="h-52 w-full object-cover  rounded-t-lg border-b-2 border-primary"
                    />

                    <div className='text-center absolute top-[45%] text-slate-100'>
                        <h1 className="text-3xl font-black tracking-wider">Sistema de Garagem!</h1>
                        <p className="font-bold">
                            Clique em <span className="text-primary font-extrabold">"Spawnar"</span> para spawnar um veículo
                        </p>
                    </div>
                </div>

                <div className='flex-1 overflow-auto'>
                    {children}
                </div>
            </div>

            <div
                className='absolute -top-3.5 -right-3 size-7 rounded-full bg-primary flex items-center justify-center cursor-pointer transition-all active:scale-95'
                onClick={handleCloseUI}
            >
                <X
                    size={18}
                    strokeWidth={3.5}
                    className='text-slate-700'
                />
            </div>
        </div>
    )
}