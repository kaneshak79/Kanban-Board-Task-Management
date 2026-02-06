Kanban Board Application

A modern Kanban-style task management application built using React JS, @dnd-kit for drag-and-drop functionality, and Context API for global state management.

Users can create, edit, delete, and move tasks across columns: To Do, In Progress, and Done.

🚀 Features

✅ Create tasks

✅ Edit tasks in modal

✅ Delete tasks

✅ Drag and drop between columns

✅ Task priority (Low / Medium / High)

✅ Tags support

✅ Responsive UI with Tailwind CSS

✅ Clean state management using Context API

🛠 Tech Stack

React JS

@dnd-kit/core

Context API

Tailwind CSS

UUID (for unique task IDs)

Vite (for fast development build)

📂 Project Structure
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   ├── TaskModal.jsx
│
├── context/
│   └── TaskContext.jsx
│
├── pages/
│   └── Home.jsx
│
├── App.jsx
└── main.jsx

🧠 How It Works

All tasks are stored in a single tasks array.

Each task contains:

id

title

description

status (todo, inprogress, done)

priority

tags (array)

Columns filter tasks based on their status.

Drag-and-drop updates the task’s status.

Editing in the modal updates the task inside the global state.

⚙️ Installation
1️⃣ Clone the repository
git clone https://github.com/your-username/kanban-board.git

2️⃣ Navigate into project
cd kanban-board

3️⃣ Install dependencies
npm install

4️⃣ Install required packages (if needed)
npm install @dnd-kit/core @dnd-kit/sortable uuid

5️⃣ Run the development server
npm run dev


App runs at:

http://localhost:5173

🎯 Future Improvements

🔄 Add localStorage persistence

📅 Add due dates

🔍 Add search & filtering

🌙 Add dark mode

📊 Add analytics dashboard

✨ Add smooth animations

📸 Screenshots

(Add screenshots here)

👩‍💻 Author

Kanesha K
Frontend Developer | React Enthusiast
