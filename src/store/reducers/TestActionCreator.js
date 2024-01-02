import  { testSlice } from "./TestSlice";

export const collectLikedCards = (likedCards, currentCard, isLiked) => (dispatch) => {
    if (isLiked === true) {
        likedCards = [...likedCards, currentCard];
    } else {
        likedCards = likedCards.filter(card => card.id !== currentCard.id);
    }
    dispatch(testSlice.actions.correctLikedCard(likedCards));
};

export const deleteLikedCard = (likedCards, currentCard) => (dispatch) => {
    likedCards = likedCards.filter(card => card.id !== currentCard.id);
    dispatch(testSlice.actions.deleteLikedCard(likedCards));
}

