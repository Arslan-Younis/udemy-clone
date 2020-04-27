import * as Actions from './types';


export const setUser = (user) => (dispatch) => {
    dispatch({
        type: Actions.SET_USER,
        payload: user
    })
}