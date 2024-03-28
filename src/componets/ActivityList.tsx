import { useMemo, Dispatch } from 'react'
import { Activity } from '../types'
import { categories } from '../data/categories'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/react/24/outline'
import { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activites: Activity[],
    dispatch: Dispatch<ActivityActions>
}
export default function ActivityList({ activites, dispatch }: ActivityListProps) {
    const categoryName = useMemo(() => (category: Activity['category']) => categories.map(cat => cat.id === category ? cat.name : '')
        , [activites])

    const isEmptyActivitys = useMemo(()=>activites.length===0,[activites])    
    return (
        <>
            <h2 className=' text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>

            {isEmptyActivitys ? <p className=' text-center my-5'>No hay Actividades aún...</p>:
                activites.map(activite => (
                    <div key={activite.id} className=' px-5 py-10 bg-white mt-5 flex justify-between' >
                        <div className=' space-y-2 relative'>
                            <p className={` absolute -top-8 -left-8 px-10 
                    py-2 uppercase text-white font-bold ${activite.category === 1 ? 'bg-lime-500' : ' bg-orange-500'}`} >
                                {categoryName(activite.category)}</p>
                            <p className=' text-2xl font-bold pt-5 '>{activite.name}</p>
                            <p className=' text-4xl font-black text-lime-500'>
                                {activite.calories}{' '}
                                <span>Calorias</span>
                            </p>

                        </div>
                        <div className=' flex gap-5 items-center'>
                            <button onClick={() => dispatch({ type: "set-activeId", payload: { id: activite.id } })}>
                                <PencilSquareIcon className=' h8 w-8 text-gray-800' />
                            </button>
                            <button onClick={() => dispatch({ type: "delete-activity", payload: { id: activite.id } })}>
                                <XCircleIcon className=' h8 w-8 text-red-500' />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
