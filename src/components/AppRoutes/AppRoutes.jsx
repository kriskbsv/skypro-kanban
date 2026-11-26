import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MainPage from "../../pages/MainPage/MainPage";
import CardPage from "../../pages/CardPage/CardPage";
import NewCardPage from "../../pages/NewCardPage/NewCardPage";
import ExitPage from "../../pages/ExitPage/ExitPage";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";

function AppRoutes() {
    const [isAuth, setIsAuth] = useState(false);

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth} />}>
                <Route path="/" element={<MainPage />}>
                    <Route path="card/:id" element={<CardPage />} />
                    <Route path="new-card" element={<NewCardPage />} />
                    <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
                </Route>
            </Route>
            <Route
                path="/login"
                element={isAuth ? <Navigate to="/" replace /> : <LoginPage setIsAuth={setIsAuth} />}
            />
            <Route
                path="/register"
                element={isAuth ? <Navigate to="/" replace /> : <RegisterPage setIsAuth={setIsAuth} />}
            />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}

export default AppRoutes;
