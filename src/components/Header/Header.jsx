import { useState } from "react";
import { Link } from "react-router-dom";
import PopUser from "../popups/PopUser/PopUser";
import { Container } from "../../App.styled";
import {
    HeaderBlock,
    HeaderBtnMainNew,
    HeaderLogo,
    HeaderNav,
    HeaderUser,
    HeaderWrap,
} from "./Header.styled";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleUserPopup = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <HeaderWrap>
            <Container>
                <HeaderBlock>
                    <Link to="/">
                        <HeaderLogo src="/images/logo.png" alt="logo" />
                    </Link>
                    <HeaderNav>
                        <HeaderBtnMainNew to="/new-card">Создать новую задачу</HeaderBtnMainNew>
                        <HeaderUser href="#" onClick={toggleUserPopup}>Ivan Ivanov</HeaderUser>
                        {isOpen && <PopUser onClose={() => setIsOpen(false)} />}
                    </HeaderNav>
                </HeaderBlock>
            </Container>
        </HeaderWrap>
    );
}

export default Header;
