import style from "./loader.module.scss"

const Loading = () => {
    
    return(
        <div className={style.loader}>
            <div className={style.track}>
                <div className={style.mouse}></div>
            </div>
            <div className={style.face}>
                <div className={style.earsContainer}></div>
                <div className={style.eyesContainer}>
                    <div className={style.eye}></div>
                    <div className={style.eye}></div>
                </div>
                <div className={style.phiz}>
                    <div className={style.nose}></div>
                    <div className={style.lip}></div>
                    <div className={style.mouth}></div>
                </div>
            </div>
        </div>
    )
}

export default Loading;