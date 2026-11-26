import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import { Wrapper } from "../../App.styled";
import { cards } from "../../../data";

function MainPage() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Wrapper>
            <Outlet />
            <Header />
            <Main cards={cards} isLoading={isLoading} />
        </Wrapper>
    );
}

export default MainPage;
