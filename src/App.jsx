
import React from "react";
import { TaskProvider } from "./context/TaskContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <TaskProvider>
     
      <Home />
    </TaskProvider>
  );
};

export default App;
