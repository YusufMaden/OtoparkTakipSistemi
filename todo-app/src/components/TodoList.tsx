import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from '../types';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

interface TodoListProps {
  todos: TodoItemType[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTodo: Partial<TodoItemType>) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onUpdate }) => {
  if (todos.length === 0) {
    return (
      <Paper
        elevation={2}
        sx={{
          p: 4,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
          borderRadius: 2,
        }}
      >
        <TaskAltIcon sx={{ fontSize: 60, color: '#999', mb: 2 }} />
        <Typography variant="h5" color="textSecondary" gutterBottom>
          No tasks found
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Add a new task or adjust your filters to get started!
        </Typography>
      </Paper>
    );
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </Box>
  );
};

export default TodoList;
