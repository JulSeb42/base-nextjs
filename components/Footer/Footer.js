// Data
import SiteData from "../SiteData";

// Styles
import styles from "../../styles/modules/Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.Footer}>
            <p className={styles.CopyText}>
                &copy;{SiteData.siteAuthor} | {SiteData.siteYear}
            </p>
        </footer>
    );
}
