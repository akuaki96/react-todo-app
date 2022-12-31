import React from "react";

const style = {
  margin: "8px auto",
  width: "400px",
  height: "30px",
  textAlign: "center",
  backgroundColor: "#c1ffff",
  padding: "8px",
  /* margin: 8px; */
  borderRadius: "8px",
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;

  return (
    <div style={style}>
      <input
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      ></input>
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
