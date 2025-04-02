import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import Navbar from "./components/Navbar";
import UpdatePage from "./pages/UpdatePage";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "wrapper dark-mode" : "wrapper light-mode"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={<HomePage darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/create" element={<CreatePage darkMode={darkMode} />} />
        <Route path="/update/:id" element={<UpdatePage />} />
      </Routes>
    </div>
  );
};

export default App;
