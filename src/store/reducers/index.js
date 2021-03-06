import * as Actions from '../actions/types';
import { combineReducers } from 'redux';

const initialState = {
      currentUser: null,
      isLoading: true
}


const user_reducer = (state=initialState ,action) =>{
    switch(action.type){
        case Actions.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isLoading: false
            }
        default:
             return {
                 ...state
             }   
    }
}


const rootReducer = combineReducers({
    user: user_reducer
})

export default rootReducer;