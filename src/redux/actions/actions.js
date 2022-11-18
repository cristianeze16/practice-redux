import { createAction } from "@reduxjs/toolkit";

const reduxAction = createAction("reduxAction", (data) => {
  
  console.log("hola action")
  return {
    payload:data,
  };
});


const decCounter = createAction("reduxActionDec", (data) => {


return {

  
}




});



const action = {
  reduxAction,decCounter
};

export default action;
