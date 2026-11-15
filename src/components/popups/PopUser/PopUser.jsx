import {
    PopUserCheckbox,
    PopUserClose,
    PopUserExit,
    PopUserMail,
    PopUserName,
    PopUserSet,
    PopUserTheme,
    PopUserThemeText,
} from "./PopUser.styled";

function PopUser({ onClose }) {
    const handleClose = (e) => {
        e.preventDefault();
        onClose();
    };

    return (
        <PopUserSet>
            <PopUserClose href="#" onClick={handleClose}>✕</PopUserClose>
            <PopUserName>Ivan Ivanov</PopUserName>
            <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
            <PopUserTheme>
                <PopUserThemeText>Темная тема</PopUserThemeText>
                <PopUserCheckbox name="checkbox" />
            </PopUserTheme>
            <PopUserExit href="#popExit">Выйти</PopUserExit>
        </PopUserSet>
    );
}

export default PopUser;
