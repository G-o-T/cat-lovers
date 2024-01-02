import { useState } from "react";
import style from "./card.module.scss";
import { IconButton } from "@mui/material";
import { CloseOutlined } from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const Card = ({data, deleteCard, toggleLikedCard}) => {

    const [isLiked, setLiked] = useState(false);
    
    const handleToggleLike = () => {
        setLiked(prev => !prev);
        toggleLikedCard(data, !isLiked);
    }

    const shortDesc = shortenDesc(data.breeds[0].description);
    const [text, setText] = useState(shortDesc);

    function shortenDesc(desc) {
        if (desc.length >= 130) {
            return `${desc.slice(0, 129)}...`;
        } else {
            return desc;
        }
    }

    const handleDescClick = () => {
        if (text.length <= shortDesc.length) {
            setText(data.breeds[0].description)
        } else (
            setText(shortDesc)
        ) 
    }

    const handleDeleteClick = () => {
        deleteCard(data);
    }

    return (
        <div className={style.card}>
            <img alt={data.breeds[0].name} className={style.img} src={data.url}/>
            <div className={style.content}>
                <div className={style.closeIcon}>
                    <IconButton onClick={() => handleDeleteClick()}>
                        <CloseOutlined/>
                    </IconButton>
                </div>
                <div className={style.info}>
                    <div className={style.title}>
                        <p className={style.name}>{data.breeds[0].name}</p>
                        <IconButton onClick={() => handleToggleLike()}>
                            {isLiked ? <FavoriteOutlinedIcon className={style.coloredIcon}/> : <FavoriteBorderOutlinedIcon />}
                        </IconButton>
                    </div>
                    <div className={style.desc} onClick={() => handleDescClick()}>{text}</div>
                </div>
            </div>

        </div>
    )

}

export default Card;