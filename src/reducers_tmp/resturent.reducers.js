// import * as  resturentConst from '../constants/resturent.constants';

const ADD_NEW_RESTURENT = 'ADD_NEW_RESTURENT';

const ResturentReducer = (state = {}, action) => {
    const initialState = state;
    switch (action.type) {
        case ADD_NEW_RESTURENT:
            console.log(action,"action");
            return {
                ...state
            }
        default:
            return state;
    }
}
  
export default ResturentReducer;