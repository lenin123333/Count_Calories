import { useEffect, useMemo, useReducer } from "react"
import Form from "./componets/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./componets/ActivityList"
import CalorieTracker from "./componets/CalorieTracker"


function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  useEffect(() => {
    localStorage.setItem('activites', JSON.stringify(state.activites))
  }, [state.activites])

  const useConRestarApp = () => useMemo(() => state.activites.length>0, [state.activites])
  return (
    <>
      <header className=" bg-lime-600 py-3">
        <div className=" max-w-4xl mx-auto flex justify-between items-center">
          <h1 className=" text-center text-lg font-bold uppercase text-white">Contador de Calorias</h1>
          <button className=" mx-3 bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white 
              cursor-pointer text-sm rounded-lg disabled:opacity-10"
            disabled={!useConRestarApp()}
            onClick={() => dispatch({ type: 'restart-app' })}
          >Reinciar App</button>
        </div>
      </header>
      <section className=" bg-lime-500 py-20 px-5">
        <div className=" max-w-4xl mx-auto">
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>
      <section className=" bg-gray-800 py-10">
        <div className=" max-w-4xl mx-auto">
            <CalorieTracker activites={state.activites}/>
        </div>
      </section>
      <section className=" p-10 mx-auto max-w-4xl">
        <ActivityList activites={state.activites} dispatch={dispatch} />
      </section>
    </>
  )
}

export default App