import { useState} from "react";

import style from "./button.module.scss";
import cn from "classnames";

const Button = ({toggleState}) => {

    const [isActive, setActive] = useState(false);

    const clickHandler = () => {
        setActive(prev => !prev);
        toggleState(!isActive);
    }

    return (
        <button className={cn(style.btn, isActive && style.active)} onClick={clickHandler}>
            {isActive ? "Favorite cat breeds shown" : "Show favorite cat breeds"}
        </button>
    )
}

export default Button;