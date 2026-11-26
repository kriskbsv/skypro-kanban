import Card from "../Card/Card";
import { Cards, ColumnTitle, ColumnWrap } from "./Column.styled";

function Column({ title, cards }) {
    return (
        <ColumnWrap>
            <ColumnTitle>{title}</ColumnTitle>
            <Cards>
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        topic={card.topic}
                        title={card.title}
                        date={card.date}
                    />
                ))}
            </Cards>
        </ColumnWrap>
    );
}

export default Column;
