import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        window.dispatchEvent(new Event("auth-change"));
        navigate("/login");
    };

    return (
        <nav className="navbar navbar-dark bg-dark mb-4">
            <div className="container">
                <span className="navbar-brand">To-Do App</span>

                <button
                    className="btn btn-danger"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;