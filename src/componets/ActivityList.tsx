import React, { useMemo } from 'react'
import { Activity } from '../types'
import { categories } from '../data/categories'

type ActivityListProps={
    activites:Activity[]
}
export default function ActivityList({activites}:ActivityListProps) {
  const categoryName=useMemo(()=>(category:Activity['category']) =>categories.map(cat => cat.id === category ? cat.name : '')
    ,[activites])
  return (
    <>
      <h2 className=' text-4xl font-bold text-slate-600 text-center'>Comida y Actividades</h2>

      {
        activites.map(activite=>(
            <div key={activite.id} className=' px-5 py-10 bg-white mt-5 flex justify-between' >
                <div className=' space-y-2 relative'>
                    <p className={` absolute -top-8 -left-8 px-10 
                    py-2 uppercase text-white font-bold ${activite.category === 1 ? 'bg-lime-500' : ' bg-orange-500'}`} >
                        {categoryName(activite.category)}</p>
                    <p className=' text-2xl font-bold pt-5 '>{activite.name}</p>
                    <p className=' text-4xl font-black text-lime-500'>
                        {activite.name}{' '}
                        <span>Calorias</span>
                    </p>

                </div>
                <div>

                </div>
            </div>
        ))
      }
    </>
  )
}
