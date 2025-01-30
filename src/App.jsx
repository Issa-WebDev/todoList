import React, { useEffect, useState } from "react";

const App = () => {
  const [todos, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const addTodo = (event) => {
    event.preventDefault();

    if (!inputValue) return;
    setTodo((todos) => [...todos, { id: Date.now(), text: inputValue }]);
    setInputValue("");
  };

  const removeTodo = (currentId) => {
    setTodo(todos.filter((todo) => todo.id !== currentId));
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <form className="form" onSubmit={addTodo}>
        <input
          type="text"
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Enter todo.."
          value={inputValue}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>

      <ul>
        {todos.map(({ id, text }) => (
          <li key={id}>
            {text}
            <button className="close" onClick={() => removeTodo(id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
