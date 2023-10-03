
import React from 'react';
import Todo from '../components/Todo';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

export default TodoList;
