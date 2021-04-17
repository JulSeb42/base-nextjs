// Components
import AppHead from "../AppHead";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// Styles
import styles from "../../styles/modules/Wrapper.module.scss";

export default function Wrapper(props) {
    return (
        <div>
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header />

            {props.children}

            <Footer />
        </div>
    );
}
