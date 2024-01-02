import PetsRoundedIcon from '@mui/icons-material/PetsRounded';
import style from "./logo.module.scss";

const Logo = () => {

    return (
        <div className={style.logo}>
            <div className={style.icon}>
                <PetsRoundedIcon size="large"/>
            </div>
            <div className={style.block}>
                <p className={style.text}>Because everyday</p>
                <p className={style.text}>is a <span className={style.accent}>Caturday</span></p>
            </div>

        </div>
    )

}

export default Logo;