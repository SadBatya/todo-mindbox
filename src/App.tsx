import { useState } from "react";
import "./App.css";
import { ITodo } from "./types/todoType";
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([
        ...todos,
        {
          id: nanoid(),
          text,
          status: false,
        },
      ]);
      setInputValue("");
    }
  };



  
  return (
    <div className="todo">
      <h1 className="todo_title">Todos</h1>
      <div className="todo_inner">
        <input
          type="text"
          className="todo_input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="todo_add_btn" onClick={() => addTodo(inputValue)}>
          +
        </div>
      </div>
      <div className="todo_list">
        {todos.map((todo) => (
          <div className="todo_item" key={todo.id}>
            <label className="todo_inner">
              <input className="todo_status-checkbox" type="checkbox" />
              <div className="todo_checkbox"></div>
              <div className="todo_text">{todo.text}</div>
            </label>
          </div>
        ))}
        <div className="todo_num">5 todo left</div>
        <div className="todo_filter_btns">
          <button>All</button>
          <button>Completed</button>
          <button>Uncompleted</button>
        </div>
      </div>
    </div>
  );
}

export default App;
