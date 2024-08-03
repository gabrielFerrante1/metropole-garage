import { Layout } from '@/components/Layout'
import { VehicleList } from '@/components/VehicleList'
import { VehicleListEmpty } from '@/components/VehicleListEmpty'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { setIsVisible } from '@/redux/slices/appSlice'
import { setVehicles } from '@/redux/slices/vehiclesSlice'
import { Event } from '@/types/Event'
import { fetchNui } from '@/utils/fetchNui'
import { useEffect } from 'react'

const App = () => {
    const { isVisible } = useAppSelector(state => state.app)
    const { vehicles } = useAppSelector(state => state.vehicles)

    const dispatch = useAppDispatch()

    useEffect(() => {
        // Get the vehicles from the server
        fetchNui('get-vehicles')

        const handleMessage = (event: Event) => {
            if (event.data.type === 'toggle-ui') {
                dispatch(setIsVisible(event.data.show))
            }

            if (event.data.type === 'get-vehicles') {
                dispatch(setVehicles(event.data.vehicles))
            }
        }

        const handleKeydown = (event: KeyboardEvent) => {
            // Close the UI when the ESC key is pressed
            if (event.key === 'Escape') {
                fetchNui('close-ui')
            }
        }

        window.addEventListener('message', handleMessage);
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('message', handleMessage);
            window.removeEventListener('keydown', handleKeydown);
        }
    }, [dispatch])

    return (
        <div className={`duration-500 select-none ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className='h-screen flex justify-center items-center bg-slate-900/60'>
                <Layout>
                    {vehicles.length > 0 ?
                        <VehicleList />
                        :
                        <VehicleListEmpty />
                    }
                </Layout>
            </div>
        </div>
    )
}

export default App;
