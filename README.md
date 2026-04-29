# 📊 Student Grade Analyzer

Live Demo: https://nqobile2004.github.io/student-grade-analyzer-/

A responsive web app to add, analyze, and visualize student grades. Built with vanilla JavaScript, HTML5, and Chart.js. No frameworks, no backend — everything runs in the browser.

![App Screenshot](https://via.placeholder.com/800x400/1e293b/38bdf8?text=Add+your+screenshot+here)

### ✨ Features

**Core Functionality**
- Full CRUD operations: Add, edit, delete students
- Automatic grade calculation: A-F grading scale
- Pass/Fail detection with 50% threshold

**Data Visualization & Insights**
- Live Chart.js bar graph showing class rankings
- Ranking system with gold/silver/bronze for top 3
- Smart insights: "🏆 Top Performer", "📈 Improving", "⚠️ At Risk"
- Class statistics: average, pass rate, student count

**Data Management**
- Import/Export CSV functionality
- Real-time search and filtering
- LocalStorage persistence - data saves automatically

**UI/UX**
- Dark/Light theme toggle with preference saving
- Mobile responsive design
- Clean card-based layout with hover effects

### 🛠️ Tech Stack

| Tech | Usage |
| --- | --- |
| HTML5 | Semantic structure |
| CSS3 | Custom styling, CSS variables, responsive grid |
| JavaScript ES6+ | DOM manipulation, localStorage, file handling |
| Chart.js | Data visualization |

### 🚀 How to Use

1. **Add Student**: Enter name and comma-separated marks → Click "Add Student"
2. **Edit**: Click "Edit" on any card → Update details → "Update Student" 
3. **Delete**: Click "Delete" to remove a student
4. **Search**: Type in search bar to filter students instantly
5. **Import**: Click "Import CSV" to bulk upload students
6. **Export**: Click "Export CSV" to download results
7. **Theme**: Click "🌙 Dark / ☀️ Light" to toggle themes

**CSV Format for Import:**
```csv
Name,Tests
John Doe,88;92;85
Jane Smith,70;75;72

