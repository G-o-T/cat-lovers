import Logo from "../UI/Logo/Logo";
import style from "./header.module.scss";

const Header = () => {

    return (
        <div className={style.header}>
            <Logo />
            <div className={style.block}>
                <p>Created with 'The Cat API'</p>
                <a href="https://thecatapi.com/" target="blank" className={style.link}>https://thecatapi.com/</a>
            </div> 
        </div>
    )
}

export default Header;


