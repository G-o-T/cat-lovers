import Card from "../Card/Card";
import Loader from "../UI/Loader/Loader";
import Error from "../UI/Error/Error";
import Button from "../UI/Button/Button";
import style from "./cardsList.module.scss";

import { useEffect, useState } from "react";
import { catSlice } from "../../store/reducers/CatSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "../../store/reducers/ActionCreator";
import testSlice  from "../../store/reducers/TestSlice";
import { collectLikedCards, deleteLikedCard } from "../../store/reducers/TestActionCreator";

const CardsList = () => {

    const dispatch = useDispatch();
    const {cats, isLoading, error} = useSelector(state => state.catReducer);
    const [catsList, setCatsList] = useState([]);
    const {likedCards} = useSelector(state => state.testReducer);
    const [shownList, setShownList] = useState([]);
    const [isActiveButton, setActiveButton] = useState(false);


    useEffect(() => {
        if (cats.length > 0) {
            setCatsList(cats);
            setShownList(cats);
        } else {
            dispatch(fetchCats());
        }
    }, [cats.length]);

    const deleteCard = (currentCard) => {
        setCatsList(catsList.filter(item => item.id !== currentCard.id));
        setShownList(catsList.filter(item => item.id !== currentCard.id));


        if (likedCards.includes(currentCard) && isActiveButton === true) {
            dispatch(deleteLikedCard(likedCards, currentCard));
            setShownList(likedCards.filter(item => item.id !== currentCard.id));
        }

        if (likedCards.includes(currentCard)) {
            dispatch(deleteLikedCard(likedCards, currentCard));
        }
    }

    const toggleLikedCard = (currentCard, state) => {
        dispatch(collectLikedCards(likedCards, currentCard, state));
    }

    const showLikedCards = () => {
        setShownList(likedCards);
    }

    const showAllCards = () => {
        setShownList(catsList);
    }

    const toggleState = (isActive) => {
        setActiveButton(isActive);
        if (isActive) {
            showLikedCards();
        } else {
            showAllCards();
        }
    }

    return (
            <div className={style.wrapper}>
                <Button toggleState={toggleState}/>
                {isLoading && <Loader />}
                {error && <Error text={error}/>}
                <div className={style.cards}>
                    {shownList.length > 0 ? shownList.map(cat => <Card key={cat.id} data={cat} deleteCard={deleteCard} toggleLikedCard={toggleLikedCard}/>) : <div className={style.attention}>No cat breeds</div>}
                </div>
            </div>
    )
}

export default CardsList;