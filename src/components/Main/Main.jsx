import Column from "../Column/Column";

const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
];

function Main({ cards, isLoading }) {
    return (
        <main className="main">
            <div className="container">
                <div className="main__block">
                    {isLoading ? (
                        <p className="main__loading">Данные загружаются</p>
                    ) : (
                        <div className="main__content">
                            {statuses.map((status) => (
                                <Column
                                    key={status}
                                    title={status}
                                    cards={cards.filter((card) => card.status === status)}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}

export default Main;
