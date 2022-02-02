import "./styles.css";

const INIT_STATE = 0;

const reducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_2":
      return state + (state % 2 === 0 ? 1:0);
    default:
      return state ;
  }
};

export default reducer;

