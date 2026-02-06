🗂 Kanban Board – React Task Management App

A fully functional Kanban-style task management application built with React JS, implementing drag-and-drop functionality using @dnd-kit, global state management using Context API, and modern UI styling using Tailwind CSS.

This project demonstrates advanced React concepts including state lifting, context management, controlled components, drag-and-drop handling, and component modularization.

📌 Project Overview

The Kanban Board allows users to:

Create tasks

Organize them into columns

Edit task details

Delete tasks

Drag and drop tasks between workflow stages

The workflow consists of three columns:

📝 To Do

🚧 In Progress

✅ Done

Each task contains detailed information including priority and tags.

🚀 Core Features
1️⃣ Task Creation

Users can create a task directly inside a column.
When a task is created:

A unique ID is generated using uuid

Status is automatically assigned based on the column

Tags are parsed into an array

Priority is stored

2️⃣ Drag and Drop (DnD Kit)

The app uses:

@dnd-kit/core
@dnd-kit/sortable


Each column is made droppable using:

useDroppable({ id: columnId })


Each task card is draggable.

When a task is dropped into another column:

The status field of that task is updated

The UI re-renders automatically

3️⃣ Task Editing (Modal)

Clicking a task opens a modal where users can:

Edit title

Edit description

Change priority

Modify tags

Change status

Delete task

All edits update the global task state instantly.

4️⃣ Global State Management (Context API)

All tasks are stored in a centralized TaskContext.

const { tasks, setTasks } = useContext(TaskContext);


This ensures:

No prop drilling

Clean architecture

Easy state updates

Better scalability

5️⃣ Tailwind CSS Styling

The UI is styled using Tailwind CSS for:

Responsive layout

Modern UI design

Clean spacing

Shadow effects

Rounded components

🛠 Tech Stack
Technology	Purpose
React JS	Frontend Framework
@dnd-kit	Drag & Drop functionality
Context API	Global State Management
Tailwind CSS	Styling
UUID	Unique task IDs
Vite	Fast Development Server
📂 Folder Structure
src/
│
├── components/
│   ├── Column.jsx        // Column container
│   ├── TaskCard.jsx      // Individual draggable task
│   ├── TaskModal.jsx     // Edit/Delete modal
│   ├── Navbar.jsx
│
├── context/
│   └── TaskContext.jsx   // Global task state
│
├── pages/
│   └── Home.jsx          // Main board layout
│
├── App.jsx
└── main.jsx

🧠 Application Flow
Step 1 – Task Creation

User fills form →
Task object is created →
Stored in global state →
Column filters based on status.

Step 2 – Drag Event

User drags task →
Drop detected →
Task status updated →
Board re-renders.

Step 3 – Edit

User clicks task →
Modal opens →
Edits saved →
Global state updated.

🧩 Task Object Structure
{
  id: "unique-id",
  title: "Complete project",
  description: "Finish Kanban board implementation",
  status: "todo",
  priority: "High",
  tags: ["react", "frontend"]
}

⚙️ Installation Guide
1️⃣ Clone Repository
git clone https://github.com/your-username/kanban-board.git

2️⃣ Navigate into project
cd kanban-board

3️⃣ Install Dependencies
npm install

4️⃣ Install Required Packages
npm install @dnd-kit/core @dnd-kit/sortable uuid

5️⃣ Start Development Server
npm run dev


Open in browser:

http://localhost:5173

🔮 Future Enhancements

💾 Add localStorage persistence

🔍 Search and filter tasks

📅 Due date feature

🌙 Dark mode

🔐 Authentication

📱 Mobile optimization improvements

📊 Task analytics dashboard

🎯 Learning Outcomes

Through this project, the following concepts were implemented:

Advanced React state management

Controlled forms

Component reusability

Drag-and-drop architecture

UI responsiveness with Tailwind

Context API implementation

Event handling in React

Functional programming concepts

👩‍💻 Author

Kanesha K
