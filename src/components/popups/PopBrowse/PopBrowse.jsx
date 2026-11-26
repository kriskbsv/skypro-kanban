import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import Calendar from "../../Calendar/Calendar";

const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];

function PopBrowse({ id, card }) {
    const [isEdit, setIsEdit] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();

    const handleClose = () => navigate("/");

    if (!card) {
        return (
            <div className="pop-browse">
                <div className="pop-browse__container">
                    <div className="pop-browse__block">
                        <div className="pop-browse__content">
                            <div className="pop-browse__top-block">
                                <h3 className="pop-browse__ttl">Задача с id {id} не найдена</h3>
                            </div>
                            <button type="button" className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>Закрыть</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const topicColors = theme.topics[card.topic] ?? theme.topics.default;
    const topicStyle = { backgroundColor: topicColors.background, color: topicColors.color };

    return (
        <div className="pop-browse">
            <div className="pop-browse__container">
                <div className="pop-browse__block">
                    <div className="pop-browse__content">
                        <div className="pop-browse__top-block">
                            <h3 className="pop-browse__ttl">{card.title}</h3>
                            <div className="categories__theme theme-top _active-category" style={topicStyle}>
                                <p>{card.topic}</p>
                            </div>
                        </div>
                        <p className="pop-browse__id subttl">ID задачи: {id}</p>
                        <div className="pop-browse__status status">
                            <p className="status__p subttl">Статус</p>
                            <div className="status__themes">
                                {statuses.map((status) => (
                                    <div
                                        key={status}
                                        className={`status__theme ${status === card.status ? "_gray" : ""} ${!isEdit && status !== card.status ? "_hide" : ""}`}
                                    >
                                        <p className={status === card.status ? "_gray" : ""}>{status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="pop-browse__wrap">
                            <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">
                                <div className="form-browse__block">
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <textarea className="form-browse__area" name="text" id="textArea01" readOnly={!isEdit} placeholder="Введите описание задачи..."></textarea>
                                </div>
                            </form>
                            <Calendar />
                        </div>
                        <div className="theme-down__categories theme-down">
                            <p className="categories__p subttl">Категория</p>
                            <div className="categories__theme _active-category" style={topicStyle}>
                                <p>{card.topic}</p>
                            </div>
                        </div>
                        {isEdit ? (
                            <div className="pop-browse__btn-edit">
                                <div className="btn-group">
                                    <button type="button" className="btn-edit__edit _btn-bg _hover01" onClick={() => setIsEdit(false)}>Сохранить</button>
                                    <button type="button" className="btn-edit__edit _btn-bor _hover03" onClick={() => setIsEdit(false)}>Отменить</button>
                                    <button type="button" className="btn-edit__delete _btn-bor _hover03" onClick={handleClose}>Удалить задачу</button>
                                </div>
                                <button type="button" className="btn-edit__close _btn-bg _hover01" onClick={handleClose}>Закрыть</button>
                            </div>
                        ) : (
                            <div className="pop-browse__btn-browse">
                                <div className="btn-group">
                                    <button type="button" className="btn-browse__edit _btn-bor _hover03" onClick={() => setIsEdit(true)}>Редактировать задачу</button>
                                    <button type="button" className="btn-browse__delete _btn-bor _hover03" onClick={handleClose}>Удалить задачу</button>
                                </div>
                                <button type="button" className="btn-browse__close _btn-bg _hover01" onClick={handleClose}>Закрыть</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopBrowse;
