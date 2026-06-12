import { TodoItem } from '../types';

const STORAGE_KEY = 'todos';

export const loadTodos = (): TodoItem[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];

    const todos = JSON.parse(stored);
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
    }));
  } catch (error) {
    console.error('Error loading todos from localStorage:', error);
    return [];
  }
};

export const saveTodos = (todos: TodoItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (error) {
    console.error('Error saving todos to localStorage:', error);
  }
};

export const clearAllTodos = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing todos from localStorage:', error);
  }
};

export const exportTodos = (todos: TodoItem[]): string => {
  return JSON.stringify(todos, null, 2);
};

export const importTodos = (jsonString: string): TodoItem[] => {
  try {
    const todos = JSON.parse(jsonString);
    return todos.map((todo: any) => ({
      ...todo,
      createdAt: new Date(todo.createdAt),
      dueDate: todo.dueDate ? new Date(todo.dueDate) : null,
    }));
  } catch (error) {
    console.error('Error importing todos:', error);
    return [];
  }
};
