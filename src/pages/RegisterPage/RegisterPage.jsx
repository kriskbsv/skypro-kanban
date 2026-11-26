import { useNavigate } from "react-router-dom";
import AuthForm from "../../components/AuthForm/AuthForm";

function RegisterPage({ setIsAuth }) {
    const navigate = useNavigate();

    const handleRegister = () => {
        setIsAuth(true);
        navigate("/", { replace: true });
    };

    return <AuthForm isSignUp onSubmit={handleRegister} />;
}

export default RegisterPage;
