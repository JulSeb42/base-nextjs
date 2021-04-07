import styles from "../styles/modules/header.module.scss"
import LinkTo from "./link-to"

// Data 
const siteName = "Blog Next.js"

export default function Header() {
    return (
        <header className={styles.header}>
            <LinkTo to="/" text={siteName}/>

            <nav>
                <LinkTo to="/" text="Home" />
                <LinkTo to="/about/" text="About" />
            </nav>
        </header>
    );
}