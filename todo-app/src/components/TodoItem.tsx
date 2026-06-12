import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Checkbox,
  Typography,
  IconButton,
  Chip,
  TextField,
  Button,
  Collapse,
  Grid,
} from '@mui/material';
import { TodoItem as TodoItemType } from '../types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { formatDistanceToNow } from 'date-fns';

interface TodoItemProps {
  todo: TodoItemType;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, updatedTodo: Partial<TodoItemType>) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [editPriority, setEditPriority] = useState(todo.priority);

  const handleSave = () => {
    onUpdate(todo.id, {
      title: editTitle,
      description: editDescription,
      priority: editPriority,
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDescription(todo.description);
    setEditPriority(todo.priority);
    setIsEditing(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#f44336';
      case 'medium':
        return '#ff9800';
      case 'low':
        return '#4caf50';
      default:
        return '#999';
    }
  };

  const getPriorityLabel = (priority: string) => {
    return priority.charAt(0).toUpperCase() + priority.slice(1);
  };

  return (
    <Card
      sx={{
        boxShadow: 2,
        '&:hover': {
          boxShadow: 4,
        },
        transition: 'all 0.3s',
        opacity: todo.completed ? 0.7 : 1,
        borderLeft: `4px solid ${getPriorityColor(todo.priority)}`,
      }}
    >
      <CardContent>
        {!isEditing ? (
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
                sx={{ mt: 1 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#999' : 'inherit',
                    fontWeight: 'bold',
                  }}
                >
                  {todo.title}
                </Typography>
                <Box sx={{ mt: 1, display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Chip
                    label={getPriorityLabel(todo.priority)}
                    size="small"
                    sx={{
                      backgroundColor: getPriorityColor(todo.priority),
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                  <Typography variant="caption" color="textSecondary">
                    Created {formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}
                  </Typography>
                </Box>
              </Box>
              <Box>
                <IconButton
                  size="small"
                  onClick={() => setIsExpanded(!isExpanded)}
                  sx={{
                    transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s',
                  }}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
            </Box>

            <Collapse in={isExpanded}>
              <Box sx={{ mt: 2, ml: 4, pt: 2, borderTop: '1px solid #eee' }}>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {todo.description}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton
                    size="small"
                    color="primary"
                    onClick={() => setIsEditing(true)}
                    title="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="error"
                    onClick={() => onDelete(todo.id)}
                    title="Delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>
            </Collapse>
          </Box>
        ) : (
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  multiline
                  rows={3}
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Priority"
                  value={editPriority}
                  onChange={(e) => setEditPriority(e.target.value)}
                  select
                  SelectProps={{ native: true }}
                  size="small"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={<SaveIcon />}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    size="small"
                    startIcon={<CancelIcon />}
                    onClick={handleCancel}
                  >
                    Cancel
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;
