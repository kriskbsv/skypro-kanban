import Column from "../Column/Column";
import { Container } from "../../App.styled";
import { MainBlock, MainContent, MainLoading, MainWrap } from "./Main.styled";

const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main({ cards, isLoading }) {
    return (
        <MainWrap>
            <Container>
                <MainBlock>
                    {isLoading ? (
                        <MainLoading>Данные загружаются</MainLoading>
                    ) : (
                        <MainContent>
                            {statuses.map((status) => (
                                <Column
                                    key={status}
                                    title={status}
                                    cards={cards.filter((card) => card.status === status)}
                                />
                            ))}
                        </MainContent>
                    )}
                </MainBlock>
            </Container>
        </MainWrap>
    );
}

export default Main;
