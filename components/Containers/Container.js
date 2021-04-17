// Styles
import styles from "../../styles/modules/Container.module.scss";

export default function Container({ children }) {
    return <main className={styles.Container}>{children}</main>;
}
