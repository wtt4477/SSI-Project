const incAction = () => {
  return {
    type: "INCREMENT"
  };
}

const incAction2 = () => {
  
  return {
        type: "INCREMENT_2"};
 
}

const decAction = () => {
  return {
    type: "DECREMENT"
  };
}

export {
  incAction,
  incAction2,
  decAction,
};
