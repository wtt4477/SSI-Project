import React from "react";

function Todo(props) {
  return (
    <div>
      {props.todo.text}
      <button onClick={props.deleteComplete}>X</button>
    </div>
  );
}

export default Todo;
