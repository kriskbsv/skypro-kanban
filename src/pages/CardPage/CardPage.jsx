import { useParams } from "react-router-dom";
import PopBrowse from "../../components/popups/PopBrowse/PopBrowse";
import { cards } from "../../../data";

function CardPage() {
    const { id } = useParams();
    const card = cards.find((item) => String(item.id) === id);

    return <PopBrowse id={id} card={card} />;
}

export default CardPage;
