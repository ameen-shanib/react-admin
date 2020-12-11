import { createStore } from 'redux'
import { resturentAction } from './actions/resturent.action'

const initialState = {
  sidebarShow: 'responsive',
  resturentData : [
      {name:"ddd",place:'dddd',foodType:'veg'},{name:"ddd",place:'dddd',foodType:'non veg'}
  ]
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      console.log("loading");
      return {...state, ...rest }
    case 'addResturent':
      if(typof(rest.resturentData.id) !== undefined){
        let data = state.resturentData.map((a,b) => {
          if(a.id == rest.resturentData.id){
            a = rest.resturentData
          }
          return a;
        })
        state.resturentData = Object.assign({}, state.resturentData,data);
      }else{
        state.resturentData = Object.assign({}, state.resturentData,rest.resturentData);
      }
      
      return {
        ...state
      }
      case 'deleteRes':
        if(rest.resturentData.id){
          state.resturentData.filter((a,b) => {
            if(a.id != rest.resturentData.id) return;
          })
        }
        return {
          ...state
        }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store