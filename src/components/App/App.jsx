import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { LoginPage, RidesPage } from "../../pages/pagesImport.js";
import { ProtectedRoute } from "../componentsImport.js";

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
