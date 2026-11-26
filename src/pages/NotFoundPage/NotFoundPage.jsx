import {
    NotFoundCode,
    NotFoundLink,
    NotFoundText,
    NotFoundWrapper,
} from "./NotFoundPage.styled";

function NotFoundPage() {
    return (
        <NotFoundWrapper>
            <NotFoundCode>404</NotFoundCode>
            <NotFoundText>Такой страницы не существует</NotFoundText>
            <NotFoundLink to="/">Вернуться на главную</NotFoundLink>
        </NotFoundWrapper>
    );
}

export default NotFoundPage;
