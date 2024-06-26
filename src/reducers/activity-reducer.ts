import { Activity } from "../types"

export type ActivityActions = 
    {type:'save-activity',payload:{newActivite:Activity}} 
    |
    {type:'set-activeId',payload:{id:Activity['id']}}
    |
    {type:'delete-activity',payload:{id:Activity['id']}}
    |
    {type:'restart-app'}



export type ActivityState = {
    activites: Activity[],
    activiteId:Activity['id']
}

const localStorageActivities=(): Activity[]=>{
    const activites = localStorage.getItem('activites')
    return activites ? JSON.parse(activites) : []
}
export const initialState: ActivityState = {
    activites: localStorageActivities(),
    activiteId:''
}

export const activityReducer = (
    state: ActivityState=initialState,
    action:ActivityActions
) => {

    if(action.type === 'save-activity'){
        //Este maneja la logica para actualizar el state
       let updateActivities : Activity[] =[]
        if(state.activiteId){
            updateActivities= state.activites.map(activity=> activity.id === state.activiteId ? action.payload.newActivite: activity)
       }else{
        updateActivities=[...state.activites,action.payload.newActivite]
       }
        return {
            ...state,
            activites:updateActivities,
            activiteId:''
        }
    }
    if(action.type === 'set-activeId'){
        return {
            ...state,
            activiteId:action.payload.id,
            
        }
    }
    if(action.type === 'delete-activity'){
        return{
            ...state,
            activites:state.activites.filter(activity=> activity.id !== action.payload.id)
        }
    }

    if(action.type === 'restart-app'){
        return{
            activites:[],
            activiteId:''
        }
    }
    return state
}