import React from 'react';
import { Box, Chip, TextField, Button, Grid, Paper } from '@mui/material';
import { FilterType } from '../types';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';

interface TodoFilterProps {
  filter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  onClearCompleted: () => void;
  completedCount: number;
}

const TodoFilter: React.FC<TodoFilterProps> = ({
  filter,
  onFilterChange,
  searchTerm,
  onSearchChange,
  onClearCompleted,
  completedCount,
}) => {
  const filters: { label: string; value: FilterType }[] = [
    { label: 'All Tasks', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Pending', value: 'pending' },
    { label: 'High Priority', value: 'high' },
    { label: 'Medium Priority', value: 'medium' },
    { label: 'Low Priority', value: 'low' },
  ];

  return (
    <Paper elevation={2} sx={{ p: 2, mb: 3, background: '#f8f9fa' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            placeholder="Search tasks by title or description..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: 'action.active' }} />,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {filters.map((f) => (
              <Chip
                key={f.value}
                label={f.label}
                onClick={() => onFilterChange(f.value)}
                color={filter === f.value ? 'primary' : 'default'}
                variant={filter === f.value ? 'filled' : 'outlined'}
                sx={{
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              />
            ))}
          </Box>
        </Grid>
        {completedCount > 0 && (
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              size="small"
              startIcon={<DeleteIcon />}
              onClick={onClearCompleted}
            >
              Clear Completed Tasks ({completedCount})
            </Button>
          </Grid>
        )}
      </Grid>
    </Paper>
  );
};

export default TodoFilter;
