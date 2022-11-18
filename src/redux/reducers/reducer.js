import { createReducer } from "@reduxjs/toolkit";
import  action  from '../actions/actions'

const {reduxAction,decCounter} = action


const initialState = { value: 0 };

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(reduxAction,(state, action) => {
    console.log("hola")
     return {...state,value: state.value+1}
    


  }).addCase(decCounter,(state, action) => {
    return {...state,value: state.value-1}



  });
});




export default reducer;
