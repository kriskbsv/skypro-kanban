import { useState } from "react";
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
                    <a href="" target="_self">
                        <HeaderLogo src="images/logo.png" alt="logo" />
                    </a>
                    <HeaderNav>
                        <HeaderBtnMainNew href="#popNewCard">Создать новую задачу</HeaderBtnMainNew>
                        <HeaderUser href="#" onClick={toggleUserPopup}>Ivan Ivanov</HeaderUser>
                        {isOpen && <PopUser onClose={() => setIsOpen(false)} />}
                    </HeaderNav>
                </HeaderBlock>
            </Container>
        </HeaderWrap>
    );
}

export default Header;
