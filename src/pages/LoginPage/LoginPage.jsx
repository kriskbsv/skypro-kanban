import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

function LoginPage({ setIsAuth }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(true);
        navigate("/", { replace: true });
    };

    return <AuthForm onSubmit={handleLogin} />;
}

export default LoginPage;
