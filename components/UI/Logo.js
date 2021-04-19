// Data
import siteData from "../SiteData";

// Components
import Link from "next/link"

// Styles
import styles from "../../styles/modules/Logo.module.scss";

export default function Logo() {
    return (
        <Link href="/">
            <a className={styles.Logo}>
                {siteData.siteName}
            </a>
        </Link>
    );
}
