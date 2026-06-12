export type FilterType = 'all' | 'completed' | 'pending' | 'high' | 'medium' | 'low';

export interface TodoItem {
  id: string;
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  createdAt: Date;
  dueDate: Date | null;
  tags: string[];
}

export interface Stats {
  total: number;
  completed: number;
  pending: number;
  high: number;
}
