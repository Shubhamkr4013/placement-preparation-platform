
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  UserRound,
  Mail,
  GraduationCap,
  Building2,
  CalendarDays,
  Code2,
  Save,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  let student = null;

  try {
    student = JSON.parse(
      sessionStorage.getItem("student") || "null"
    );
  } catch {
    student = null;
  }

  const [form, setForm] = useState({
    name: student?.name || "",
    email: student?.email || "",
    college: "",
    degree: "B.Tech",
    graduationYear: "2026",
    skills: "Java, SQL, React",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const updatedStudent = {
      ...student,
      name: form.name.trim(),
      email: form.email.trim(),
    };

    sessionStorage.setItem(
      "student",
      JSON.stringify(updatedStudent)
    );

    setMessage(
      "Profile updated for this session. College and skills are not saved to the database yet."
    );
  }

  return (
    <main className="profile-page">
      <div className="profile-container">
        <button
          className="profile-back"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={18} /> Back to Dashboard
        </button>

        <header className="profile-heading">
          <div>
            <span className="profile-eyebrow">STUDENT ACCOUNT</span>
            <h1>My Profile</h1>
            <p>Manage your personal and academic information.</p>
          </div>
        </header>

        <section className="profile-card">
          <div className="profile-banner">
            <div className="profile-large-avatar">
              <UserRound size={36} />
            </div>
            <div>
              <h2>{form.name || "Your Name"}</h2>
              <p>{form.email || "your-email@example.com"}</p>
            </div>
          </div>

          <form className="profile-form" onSubmit={handleSubmit}>
            <h3>Personal Information</h3>

            <div className="profile-fields">
              <div className="profile-field">
                <label htmlFor="profile-name">Full Name</label>
                <div className="profile-input-wrap">
                  <UserRound size={18} />
                  <input
                    id="profile-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                  />
                </div>
              </div>

              <div className="profile-field">
                <label htmlFor="profile-email">Email Address</label>
                <div className="profile-input-wrap">
                  <Mail size={18} />
                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    value={form.email}
                    readOnly
                  />
                </div>
                <small>Email change is not enabled yet.</small>
              </div>
            </div>

            <div className="profile-divider" />

            <h3>Academic Information</h3>

            <div className="profile-fields">
              <div className="profile-field">
                <label htmlFor="profile-college">College Name</label>
                <div className="profile-input-wrap">
                  <Building2 size={18} />
                  <input
                    id="profile-college"
                    name="college"
                    placeholder="Enter your college name"
                    value={form.college}
                    onChange={handleChange}
                    maxLength={150}
                  />
                </div>
              </div>

              <div className="profile-field">
                <label htmlFor="profile-degree">Degree</label>
                <div className="profile-input-wrap">
                  <GraduationCap size={18} />
                  <select
                    id="profile-degree"
                    name="degree"
                    value={form.degree}
                    onChange={handleChange}
                  >
                    <option>B.Tech</option>
                    <option>B.E.</option>
                    <option>BCA</option>
                    <option>MCA</option>
                    <option>M.Tech</option>
                    <option>Diploma</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="profile-field">
                <label htmlFor="profile-year">Graduation Year</label>
                <div className="profile-input-wrap">
                  <CalendarDays size={18} />
                  <select
                    id="profile-year"
                    name="graduationYear"
                    value={form.graduationYear}
                    onChange={handleChange}
                  >
                    {Array.from(
                      { length: 11 },
                      (_, index) => 2022 + index
                    ).map((year) => (
                      <option key={year} value={String(year)}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="profile-field">
                <label htmlFor="profile-skills">Skills</label>
                <div className="profile-input-wrap">
                  <Code2 size={18} />
                  <input
                    id="profile-skills"
                    name="skills"
                    placeholder="Java, SQL, React"
                    value={form.skills}
                    onChange={handleChange}
                    maxLength={300}
                  />
                </div>
              </div>
            </div>

            {message && (
              <p className="profile-message" role="status">
                {message}
              </p>
            )}

            <div className="profile-actions">
              <button
                type="button"
                className="profile-cancel"
                onClick={() => navigate("/dashboard")}
              >
                Cancel
              </button>
              <button type="submit" className="profile-save">
                <Save size={17} /> Save Changes
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
