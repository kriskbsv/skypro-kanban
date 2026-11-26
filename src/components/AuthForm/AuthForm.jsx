import { Link } from "react-router-dom";
import {
    AuthBlock,
    AuthButton,
    AuthFooter,
    AuthForm as AuthFormWrap,
    AuthInput,
    AuthLink,
    AuthText,
    AuthTitle,
    AuthWrapper,
} from "./AuthForm.styled";

function AuthForm({ isSignUp = false, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <AuthWrapper>
            <AuthBlock>
                <AuthTitle>{isSignUp ? "Регистрация" : "Вход"}</AuthTitle>
                <AuthFormWrap onSubmit={handleSubmit}>
                    {isSignUp && <AuthInput type="text" name="name" placeholder="Имя" />}
                    <AuthInput type="email" name="login" placeholder="Эл. почта" />
                    <AuthInput type="password" name="password" placeholder="Пароль" />
                    <AuthButton type="submit">
                        {isSignUp ? "Зарегистрироваться" : "Войти"}
                    </AuthButton>
                </AuthFormWrap>
                <AuthFooter>
                    {isSignUp ? (
                        <AuthText>
                            Уже есть аккаунт? <AuthLink as={Link} to="/login">Войдите здесь</AuthLink>
                        </AuthText>
                    ) : (
                        <>
                            <AuthText>Нужно зарегистрироваться?</AuthText>
                            <AuthLink as={Link} to="/register">Регистрируйтесь здесь</AuthLink>
                        </>
                    )}
                </AuthFooter>
            </AuthBlock>
        </AuthWrapper>
    );
}

export default AuthForm;
