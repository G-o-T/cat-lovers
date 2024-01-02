import CardsList from "../CardsList/CardsList";
import Container from "../UI/Container/Container";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./main.module.scss";


const Main = () => {

    return (
        <div className={style.test}>
            <Container>
                <Header />
                <CardsList />
            </Container>
            <Footer />
        </div>
    )
}

export default Main;