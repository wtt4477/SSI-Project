let timer = null;
const start = () => {return dispatch => {
  timer = setInterval(() => dispatch({
    type: "TIMER_TICK"
  }), 1000);
}
}

const stop = () => {
  clearInterval(timer);
  return { type: "TIMER_STOP" };
}
export{
  start,
  stop,
}