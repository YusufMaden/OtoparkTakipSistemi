import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

interface TodoFormProps {
  onAddTodo: (title: string, description: string, priority: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [errors, setErrors] = useState<{ title?: string; description?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddTodo(title, description, priority);
    setTitle('');
    setDescription('');
    setPriority('medium');
    setErrors({});
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3, background: '#f8f9fa' }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Task Title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                if (errors.title) setErrors({ ...errors, title: '' });
              }}
              placeholder="Enter task title..."
              error={!!errors.title}
              helperText={errors.title}
              variant="outlined"
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                if (errors.description) setErrors({ ...errors, description: '' });
              }}
              placeholder="Enter task description..."
              multiline
              rows={3}
              error={!!errors.description}
              helperText={errors.description}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Priority</InputLabel>
              <Select value={priority} onChange={(e) => setPriority(e.target.value)} label="Priority">
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<AddIcon />}
              sx={{ py: 1.5 }}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default TodoForm;
