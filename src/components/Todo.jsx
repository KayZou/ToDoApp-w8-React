
import React from 'react';
import { Button } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Todo = ({ todo, onDelete, onEdit }) => {
  return (
    <div className="todo">
      <span>{todo.text}</span>
      <Button variant="warning" onClick={() => onEdit(todo.id)}>
        <FaEdit />
      </Button>
      <Button variant="danger" onClick={() => onDelete(todo.id)}>
        <FaTrash />
      </Button>
    </div>
  );
};

export default Todo;
