import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div>
        <h2>Task Manager</h2>
        <p>Welcome, {user?.name || "User"}</p>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        Logout
      </button>
    </nav>
  );
}

export default Navbar;