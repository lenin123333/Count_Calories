import { Activity } from "../types"

export type ActivityActions = {
    type:'save-activity',
    payload:{newActivite:Activity}
}

type ActivityState = {
    activites: Activity[]
}

export const initialState: ActivityState = {
    activites: []
}

export const activityReducer = (
    state: ActivityState=initialState,
    action:ActivityActions
) => {

    if(action.type === 'save-activity'){
        //Este maneja la logica para actualizar el state
       
        return {
            ...state,
            activites:[...state.activites,action.payload.newActivite]
        }
    }
    return state
}