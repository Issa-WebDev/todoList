import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    setTodo([...todo, inputValue]);
    setInputValue("");
  };

  const removeTodo = () => {
    
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter todo.."
          value={inputValue}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todo.map((t, id) => (
          <li key={id}>
            {t}
            <button onClick={removeTodo}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
