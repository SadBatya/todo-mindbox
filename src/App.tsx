import "./App.css";

function App() {
  
  return (
    <div className="todo">
      <h1 className="todo_title">Todos</h1>
      <div className="todo_inner">
        <input type="text" className="todo_input" />
        <div className="todo_add_btn">+</div>
      </div>
      <div className="todo_list">
        <div className="todo_item">
          <label className="todo_inner" htmlFor="todo">
            <input
              className="todo_status-checkbox"
              id="todo"
              name="todo"
              type="checkbox"
            />
            <div className="todo_checkbox"></div>
            <div className="todo_text">asdasdasdsad</div>
          </label>
        </div>
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
