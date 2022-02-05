const INIT_STATE = {
  time: 0
};

const reducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "TIMER_TICK":
      return {
        ...state,
       time: state.time + 1 ,
       }
     
    case "TIMER_STOP":
      return {
        ...state,
       time: state.time ,
       }
    default:
      return state.time ;
  }
};

export default reducer;