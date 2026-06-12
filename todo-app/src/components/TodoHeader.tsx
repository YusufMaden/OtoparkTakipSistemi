import React from 'react';
import { Box, Typography, Paper, Grid, Card, CardContent } from '@mui/material';
import { Stats } from '../types';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

interface TodoHeaderProps {
  stats: Stats;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ stats }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Paper
        elevation={3}
        sx={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          p: 4,
          borderRadius: 2,
          mb: 3,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
          📝 My Tasks
        </Typography>
        <Typography variant="h6" sx={{ opacity: 0.9 }}>
          Stay organized and track your daily tasks efficiently
        </Typography>
      </Paper>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 2, '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Total Tasks
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#667eea' }}>
                    {stats.total}
                  </Typography>
                </Box>
                <AssignmentIcon sx={{ fontSize: 40, color: '#667eea', opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 2, '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Completed
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4caf50' }}>
                    {stats.completed}
                  </Typography>
                </Box>
                <CheckCircleIcon sx={{ fontSize: 40, color: '#4caf50', opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 2, '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    Pending
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff9800' }}>
                    {stats.pending}
                  </Typography>
                </Box>
                <PendingActionsIcon sx={{ fontSize: 40, color: '#ff9800', opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ boxShadow: 2, '&:hover': { boxShadow: 4, transform: 'translateY(-4px)' }, transition: 'all 0.3s' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography color="textSecondary" gutterBottom>
                    High Priority
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#f44336' }}>
                    {stats.high}
                  </Typography>
                </Box>
                <PriorityHighIcon sx={{ fontSize: 40, color: '#f44336', opacity: 0.5 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoHeader;
