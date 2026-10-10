
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DSAPractice from "./pages/DSAPractice";
import TechnicalPreparation from "./pages/TechnicalPreparation";

import "./App.css";

// Placeholder pages for modules that are not implemented yet.
function PlaceholderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const titles = {
    "/mock-tests": "Mock Tests",
    "/jobs": "Placement Opportunities",
  };

  return (
    <main className="auth-page">
      <section className="auth-card">
        <h1>{titles[location.pathname] || "Coming Soon"}</h1>

        <p className="subtitle">
          This module will be developed in the next steps.
        </p>

        <button onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </section>
    </main>
  );
}

// Protect the dashboard route.
function ProtectedDashboard() {
  const student = sessionStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return <Dashboard />;
}

// Protect the profile route.
function ProtectedProfile() {
  const student = sessionStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return <Profile />;
}

// Protect the DSA practice route.
function ProtectedDSA() {
  const student = sessionStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return <DSAPractice />;
}

// Protect the technical preparation route.
function ProtectedTechnical() {
  const student = sessionStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return <TechnicalPreparation />;
}

// Protect placeholder pages.
function ProtectedPlaceholder() {
  const student = sessionStorage.getItem("student");

  if (!student) {
    return <Navigate to="/login" replace />;
  }

  return <PlaceholderPage />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route */}
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected student pages */}
        <Route
          path="/dashboard"
          element={<ProtectedDashboard />}
        />

        <Route
          path="/profile"
          element={<ProtectedProfile />}
        />

        <Route
          path="/dsa"
          element={<ProtectedDSA />}
        />

        {/* Technical Preparation: only one route */}
        <Route
          path="/technical"
          element={<ProtectedTechnical />}
        />

        {/* Upcoming modules */}
        <Route
          path="/mock-tests"
          element={<ProtectedPlaceholder />}
        />

        <Route
          path="/jobs"
          element={<ProtectedPlaceholder />}
        />

        {/* Unknown routes */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}
