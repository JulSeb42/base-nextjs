import Header from "./header"
import AppHead from "./app-head"
import styles from "../styles/modules/layout.module.scss"

export default function Layout(props) {
    return (
        <div>
            <AppHead
                title={props.title}
                keywords={props.keywords}
            />
            <Header />
            <div className={styles.layout}>
                { props.children }
            </div>
        </div>
    )
}