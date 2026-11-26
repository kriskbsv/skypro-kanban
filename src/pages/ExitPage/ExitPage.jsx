import { useNavigate } from "react-router-dom";
import PopExit from "../../components/popups/PopExit/PopExit";

function ExitPage({ setIsAuth }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsAuth(false);
        navigate("/login", { replace: true });
    };

    return <PopExit onLogout={handleLogout} />;
}

export default ExitPage;
