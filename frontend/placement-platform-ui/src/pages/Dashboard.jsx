
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import {
  LayoutDashboard,
  Code2,
  BookOpen,
  ClipboardCheck,
  BriefcaseBusiness,
  UserRound,
  LogOut,
  Target,
  Trophy,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const modules = [
  {
    title: "DSA Practice",
    description: "Improve problem-solving with coding questions.",
    icon: Code2,
    color: "blue",
    action: "/dsa",
    label: "Start practicing",
  },
  {
    title: "Technical Preparation",
    description: "Learn Java, SQL, OOPs and interview concepts.",
    icon: BookOpen,
    color: "green",
    action: "/technical",
    label: "Explore topics",
  },
  {
    title: "Mock Tests",
    description: "Practice aptitude and technical MCQs.",
    icon: ClipboardCheck,
    color: "orange",
    action: "/mock-tests",
    label: "Take a test",
  },
  {
    title: "Placement Jobs",
    description: "Explore opportunities and prepare for companies.",
    icon: BriefcaseBusiness,
    color: "purple",
    action: "/jobs",
    label: "Explore jobs",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  // All React hooks must remain inside the component.
  const [menuOpen, setMenuOpen] = useState(false);
  const [dsaProgress, setDsaProgress] = useState({ solved: 0 });

  const [topicsCompleted, setTopicsCompleted] = useState(() => {
    try {
      const saved = JSON.parse(
        localStorage.getItem("placement-topics-completed") || "[]"
      );
      return Array.isArray(saved) ? new Set(saved).size : 0;
    } catch {
      return 0;
    }
  });

  // Load and refresh DSA progress.
  useEffect(() => {
    const updateProgress = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem("placement-dsa-solved") || "[]"
        );

        const solvedIds = Array.isArray(saved) ? saved : [];

        setDsaProgress({
          solved: new Set(solvedIds).size,
        });
      } catch (error) {
        console.error("Could not load DSA progress:", error);
        setDsaProgress({ solved: 0 });
      }
    };

    updateProgress();

    window.addEventListener("dsa-progress-updated", updateProgress);
    window.addEventListener("focus", updateProgress);
    window.addEventListener("storage", updateProgress);

    return () => {
      window.removeEventListener("dsa-progress-updated", updateProgress);
      window.removeEventListener("focus", updateProgress);
      window.removeEventListener("storage", updateProgress);
    };
  }, []);

  // Load and refresh completed technical topics.
  useEffect(() => {
    const updateTopics = () => {
      try {
        const saved = JSON.parse(
          localStorage.getItem("placement-topics-completed") || "[]"
        );

        setTopicsCompleted(
          Array.isArray(saved) ? new Set(saved).size : 0
        );
      } catch (error) {
        console.error("Could not load topic progress:", error);
        setTopicsCompleted(0);
      }
    };

    updateTopics();

    window.addEventListener("topics-progress-updated", updateTopics);
    window.addEventListener("storage", updateTopics);
    window.addEventListener("focus", updateTopics);

    return () => {
      window.removeEventListener("topics-progress-updated", updateTopics);
      window.removeEventListener("storage", updateTopics);
      window.removeEventListener("focus", updateTopics);
    };
  }, []);

  // Read the logged-in student.
  let student = null;

  try {
    student = JSON.parse(
      sessionStorage.getItem("student") || "null"
    );
  } catch {
    student = null;
  }

  const firstName =
    student?.name?.trim()?.split(/\s+/)[0] || "Student";

  function handleLogout() {
    sessionStorage.removeItem("student");
    navigate("/login", { replace: true });
  }

  const navigation = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { label: "My Profile", icon: UserRound, path: "/profile" },
    { label: "DSA Practice", icon: Code2, path: "/dsa" },
    { label: "Technical Topics", icon: BookOpen, path: "/technical" },
    { label: "Mock Tests", icon: ClipboardCheck, path: "/mock-tests" },
    { label: "Placement Jobs", icon: BriefcaseBusiness, path: "/jobs" },
  ];

  return (
    <div className="pp-layout">
      {menuOpen && (
        <button
          className="pp-mobile-overlay"
          aria-label="Close navigation menu"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <aside
        className={`pp-sidebar ${
          menuOpen ? "pp-sidebar-open" : ""
        }`}
      >
        <div className="pp-brand">
          <div className="pp-brand-logo">P</div>

          <div>
            <strong>PlacePrep</strong>
            <span>CAREER PLATFORM</span>
          </div>

          <button
            className="pp-close-menu"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="pp-nav-label">WORKSPACE</div>

        <nav className="pp-navigation">
          {navigation.map(({ label, icon: Icon, path }) => (
            <button
              key={path}
              className={`pp-nav-link ${
                path === "/dashboard" ? "pp-nav-active" : ""
              }`}
              onClick={() => {
                setMenuOpen(false);
                navigate(path);
              }}
            >
              <Icon size={19} />
              <span>{label}</span>

              {path === "/dashboard" && (
                <span className="pp-active-dot" />
              )}
            </button>
          ))}
        </nav>

        <div className="pp-sidebar-bottom">
          <div className="pp-profile">
            <div className="pp-avatar">
              <UserRound size={20} />
            </div>

            <div className="pp-profile-text">
              <strong>{student?.name || "Student"}</strong>
              <span>Student account</span>
            </div>
          </div>

          <button
            className="pp-logout"
            onClick={() => navigate("/profile")}
          >
            <UserRound size={18} />
            <span>My Profile</span>
          </button>

          <button className="pp-logout" onClick={handleLogout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      <main className="pp-main">
        <header className="pp-topbar">
          <div className="pp-heading-left">
            <button
              className="pp-menu-button"
              aria-label="Open navigation menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={22} />
            </button>

            <div>
              <div className="pp-breadcrumb">
                Workspace / Overview
              </div>
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="pp-topbar-right">
            <div className="pp-date-label">
              YOUR PLACEMENT JOURNEY
            </div>

            <button
              className="pp-topbar-avatar"
              aria-label="Open profile"
              onClick={() => navigate("/profile")}
            >
              {firstName.charAt(0).toUpperCase()}
            </button>
          </div>
        </header>

        <section className="pp-welcome">
          <div className="pp-welcome-content">
            <div className="pp-welcome-badge">
              <Target size={15} />
              YOUR FUTURE STARTS HERE
            </div>

            <h2>
              Hello, {firstName}! <span>👋</span>
            </h2>

            <p>
              Every expert was once a beginner. Build your skills,
              practice daily and get ready for your dream job.
            </p>

            <button
              className="pp-primary-button"
              onClick={() => navigate("/dsa")}
            >
              Start preparing
              <ArrowUpRight size={18} />
            </button>
          </div>

          <div className="pp-welcome-art" aria-hidden="true">
            <div className="pp-art-circle pp-art-circle-one" />
            <div className="pp-art-circle pp-art-circle-two" />

            <div className="pp-art-icon">
              <Trophy size={66} strokeWidth={1.4} />
            </div>

            <div className="pp-art-tag">
              Dream job. Real skills.
            </div>
          </div>
        </section>

        <section className="pp-stats">
          <article className="pp-stat-card">
            <div className="pp-stat-top">
              <span>Problems solved</span>
              <div className="pp-stat-icon pp-blue">
                <Code2 size={20} />
              </div>
            </div>

            <strong>{dsaProgress.solved}</strong>

            <p>
              {dsaProgress.solved > 0
                ? "Great work! Keep practicing."
                : "Start solving your first question"}
            </p>
          </article>

          <article className="pp-stat-card">
            <div className="pp-stat-top">
              <span>Topics completed</span>
              <div className="pp-stat-icon pp-green">
                <BookOpen size={20} />
              </div>
            </div>

            <strong>{topicsCompleted}</strong>
            <p>Technical learning modules completed</p>
          </article>

          <article className="pp-stat-card">
            <div className="pp-stat-top">
              <span>Tests attempted</span>
              <div className="pp-stat-icon pp-orange">
                <ClipboardCheck size={20} />
              </div>
            </div>

            <strong>0</strong>
            <p>Test your preparation regularly</p>
          </article>
        </section>

        <section className="pp-section-heading">
          <div>
            <h2>Your preparation workspace</h2>
            <p>
              Everything you need to prepare for placements.
            </p>
          </div>

          <span className="pp-module-count">04 MODULES</span>
        </section>

        <section className="pp-module-grid">
          {modules.map(
            ({
              title,
              description,
              icon: Icon,
              color,
              action,
              label,
            }) => (
              <article className="pp-module-card" key={title}>
                <div className={`pp-module-icon pp-${color}`}>
                  <Icon size={23} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>

                <button
                  className="pp-module-action"
                  onClick={() => navigate(action)}
                >
                  {label}
                  <ArrowUpRight size={17} />
                </button>
              </article>
            )
          )}
        </section>

        <footer className="pp-footer">
          <span>
            PlacePrep · Placement Preparation Platform
          </span>
          <span>Learn consistently. Grow confidently.</span>
        </footer>
      </main>
    </div>
  );
}
