import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed TODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickUndo(index)}>undo</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
