import { useState } from "react";
import "./App.css";
import { ITodo, IFilter } from "./types/todoType";
import { nanoid } from "nanoid";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState<IFilter>("all");

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

  const changeTodoStatus = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "uncompleted") return !todo.status;
    if (filter === "completed") return todo.status;
    return true;
  });

  const unCompletedTodo = todos.filter((todo) => !todo.status);

  const clearCompleted = () => {
    if (!todos.length) return;

    setTodos(todos.filter((todo) => !todo.status));
  };
  
  return (
    <div className="todo">
      <h1 className="todo_title">Todos</h1>
      <div className="todo_inner">
        <input
          placeholder="What needs to be done?"
          type="text"
          className="todo_input"
          value={inputValue}
          onKeyDown={(e) => e.key === "Enter" && addTodo(inputValue)}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="todo_add_btn" onClick={() => addTodo(inputValue)}>
          +
        </div>
      </div>
      <div className="todo_list">
        {todos.length ? (
          filteredTodos.map((todo) => (
            <div className="todo_item" key={todo.id}>
              <label className="todo_inner">
                <input
                  className="todo_status-checkbox"
                  type="checkbox"
                  checked={todo.status}
                  onChange={() => changeTodoStatus(todo.id)}
                />
                <div className="todo_checkbox"></div>
                <div className="todo_text">{todo.text}</div>
              </label>
            </div>
          ))
        ) : (
          <div className="todo_no-tasks">No todos</div>
        )}
        <div className="todo_num">{unCompletedTodo.length} todo left</div>
        <div className="todo_filter_btns">
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>Completed</button>
          <button onClick={clearCompleted}>Clear compeleted</button>
        </div>
      </div>
    </div>
  );
}

export default App;
