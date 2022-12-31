import React from "react";

export const IncompleteTodos = (props) => {
  const { Todos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>

      <ul>
        {Todos.map((todo, index) => {
          return (
            <li>
              <div key={todo} className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
                {/* onClick={onClickDelete(index)} の形だとクリックしなくてもそのままmap関数中身として実行されてしまうのでonClick={() => onClickDelete(index)}というアロー関数の形にすることで引数を得られる*/}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
