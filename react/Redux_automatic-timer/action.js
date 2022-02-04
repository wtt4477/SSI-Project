let timer = null;
const start = () => (dispatch) => {
  timer = setInterval(() => dispatch(tick()), 1000);
  dispatch(tick())
}
const tick = () => { 
  return {type: "TIMER_TICK"} 
};
const stop = () => {
  clearInterval(timer);
  return { type: "TIMER_STOP" };
}
export{
  start,
  stop,
}