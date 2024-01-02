import style from "./footer.module.scss";

const Footer = () => {

    return (
        <div className={style.wrapper}>
                <div className={style.footer}>
                    <div className={style.block}>
                        <p>Developed by <a href="https://github.com/G-o-T" target="blank" className={style.link}>Volya Gotovtseva</a> for</p>
                        <img alt="Alfa logo" src="https://salfa.ru/wp-content/uploads/2022/12/Asset-11.png" width={120}></img>
                    </div>
                </div>
        </div>
    )
}

export default Footer;