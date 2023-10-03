import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (text.trim() === "") return;
    if (editId === null) {
      const newTodo = {
        id: Date.now(),
        text,
      };
      setTodos([...todos, newTodo]);
    } else {
      const updatedTodos = todos.map((todo) =>
        todo.id === editId ? { id: editId, text } : todo
      );
      setTodos(updatedTodos);
      setEditId(null);
    }
    setText("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleEditTodo = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setText(todoToEdit.text);
    setEditId(id);
  };

  return (
    <Container>
      <h1>ToDo App</h1>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Add a ToDo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button
          variant={editId === null ? "primary" : "warning"}
          onClick={handleAddTodo}
        >
          {editId === null ? <FaPlus /> : "Save"}
        </Button>
      </Form>
      <TodoList
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
    </Container>
  );
}

export default App;
