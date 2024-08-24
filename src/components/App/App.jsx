import "./App.scss";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage.jsx";
import RidesPage from "../../pages/RidesPage/RidesPage.jsx";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/rides"
        element={
          <ProtectedRoute>
            <RidesPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
