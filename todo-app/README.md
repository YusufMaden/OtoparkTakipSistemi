# 📝 Todo List Application

A modern, responsive to-do list application built with React, TypeScript, and Material-UI. Features local storage persistence, advanced filtering, and a beautiful user interface.

## ✨ Features

- ✅ **Local Storage Persistence** - All todos are automatically saved to browser's local storage
- 📊 **Dashboard Statistics** - View total, completed, pending, and high-priority tasks at a glance
- 🔍 **Advanced Search** - Search tasks by title or description
- 🏷️ **Priority Levels** - Organize tasks by High, Medium, or Low priority
- 📋 **Task Management** - Add, edit, delete, and toggle task completion status
- 🎨 **Beautiful UI** - Modern gradient design with smooth animations
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- 🔄 **Real-time Updates** - Changes are instantly saved and reflected
- 🎯 **Filter Options** - Filter by status (All, Completed, Pending) or priority
- 🗑️ **Bulk Actions** - Clear all completed tasks with one click

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Navigate to the todo-app directory
cd todo-app

# Install dependencies
npm install

# Start the development server
npm start
```

The app will open at `http://localhost:3000`

## 📖 Usage

### Adding a Task
1. Enter the task title in the "Task Title" field
2. Add a detailed description
3. Select priority level (Low, Medium, High)
4. Click "Add Task"

### Managing Tasks
- **Complete**: Click the checkbox to mark a task as complete
- **Edit**: Click the expand arrow, then the edit icon to modify a task
- **Delete**: Click the delete icon to remove a task
- **Expand**: Click the expand arrow to see full details

### Filtering Tasks
- Use the filter chips to view tasks by status or priority
- Use the search bar to find specific tasks
- Click "Clear Completed Tasks" to remove all finished tasks

## 💾 Local Storage

All tasks are automatically saved to your browser's local storage:
- **Storage Key**: `todos`
- **Format**: JSON
- **Persistence**: Data persists across browser sessions
- **Capacity**: Typically 5-10MB per domain

### Manual Export/Import

Tasks are stored in a standard JSON format and can be:
- Manually exported for backup
- Imported from other devices
- Used for data synchronization

## 🏗️ Project Structure

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoHeader.tsx
│   │   ├── TodoForm.tsx
│   │   ├── TodoFilter.tsx
│   │   ├── TodoList.tsx
│   │   └── TodoItem.tsx
│   ├── utils/
│   │   └── localStorage.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── index.css
├── public/
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## 🔧 Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type-safe JavaScript
- **Material-UI (MUI)** - Component library
- **Local Storage API** - Data persistence
- **date-fns** - Date formatting

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at `http://localhost:3000`

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Runs the test suite in interactive watch mode

## 🎨 Customization

### Theme Colors
Edit `src/App.tsx` to change the theme:
```typescript
const theme = createTheme({
  palette: {
    primary: { main: '#667eea' },
    secondary: { main: '#764ba2' },
  },
});
```

### Priority Colors
Edit `src/components/TodoItem.tsx` to customize priority colors

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ⚡ Performance Tips

1. Keep descriptions concise for faster rendering
2. Archive old tasks regularly to maintain performance
3. Use specific filters when you have many tasks
4. Browser DevTools Local Storage tab shows current usage

## 🔒 Data Privacy

- All data is stored locally in your browser
- No data is sent to external servers
- Data persists until you clear browser cache
- Each browser/device has separate storage

## 🐛 Known Limitations

- Local storage has ~5-10MB limit per domain
- Data is stored unencrypted in local storage
- No built-in sync across multiple devices
- Clearing browser data will delete all tasks

## 🚀 Future Enhancements

- [ ] Cloud synchronization with Firebase
- [ ] Due dates and reminders
- [ ] Task categories and tags
- [ ] Dark mode
- [ ] Export to PDF
- [ ] Share tasks with others
- [ ] Recurring tasks
- [ ] Multi-language support

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes

## 💡 Tips

- Use keyboard shortcuts (coming soon)
- Mark high-priority tasks first
- Review completed tasks to stay motivated
- Export your tasks regularly as backup

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Support

For issues or questions, please open a GitHub issue.

---

**Made with ❤️ by YusufMaden**
