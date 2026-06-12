import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoHeader from './components/TodoHeader';
import TodoFilter from './components/TodoFilter';
import { TodoItem, FilterType } from './types';
import { loadTodos, saveTodos } from './utils/localStorage';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#667eea',
    },
    secondary: {
      main: '#764ba2',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

const App: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Load todos from localStorage on mount
  useEffect(() => {
    const loadedTodos = loadTodos();
    setTodos(loadedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title: string, description: string, priority: string) => {
    const newTodo: TodoItem = {
      id: Date.now().toString(),
      title,
      description,
      priority,
      completed: false,
      createdAt: new Date(),
      dueDate: null,
      tags: [],
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: string, updatedTodo: Partial<TodoItem>) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    updateTodo(id, { completed: !todos.find((t) => t.id === id)?.completed });
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // Filter and search todos
  const filteredTodos = todos.filter((todo) => {
    const matchesFilter =
      filter === 'all' ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'pending' && !todo.completed) ||
      (filter === 'high' && todo.priority === 'high') ||
      (filter === 'medium' && todo.priority === 'medium') ||
      (filter === 'low' && todo.priority === 'low');

    const matchesSearch =
      todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      todo.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
    high: todos.filter((t) => t.priority === 'high' && !t.completed).length,
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Box sx={{ py: 4 }}>
          <TodoHeader stats={stats} />
          <TodoForm onAddTodo={addTodo} />
          <TodoFilter
            filter={filter}
            onFilterChange={setFilter}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onClearCompleted={clearCompleted}
            completedCount={stats.completed}
          />
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
