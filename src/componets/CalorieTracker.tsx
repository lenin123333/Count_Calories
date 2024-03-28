import { useMemo } from "react"
import { Activity } from "../types"
import CalorieDisplay from "./CalorieDisplay"

type calorieTrackerProps = {
    activites: Activity[]
}


export default function CalorieTracker({ activites }: calorieTrackerProps) {
    //Contadores de calorias
    const caloriesConsumed = useMemo(() => activites.reduce((total, activity) => activity.category === 1 ?
        total + activity.calories : total, 0), [activites])
    const caloriesExercise=useMemo(() => activites.reduce((total, activity) => activity.category === 2 ?
    total + activity.calories : total, 0), [activites])
    const netCalories=useMemo(()=>caloriesConsumed-caloriesExercise,[activites])
    return (
        <>
            <h2 className=" text-4xl font-black text-white text-center">Resuen de Calorias</h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap mt-10">
                <CalorieDisplay calories={caloriesConsumed} text="Consumidas" />
                <CalorieDisplay calories={caloriesExercise} text="Ejercicio" />
                <CalorieDisplay calories={netCalories} text="Diferencia" />
               
            </div>

        </>
    )
}
