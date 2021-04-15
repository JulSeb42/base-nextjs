// Components
import AppHead from "./AppHead";
import Link from "next/link";

// Data
import siteData from "./SiteData";

// Styles
import styles from "../styles/modules/Header.module.scss";

// Nav links
const navLinks = [
    {
        name: "Home",
        url: "/",
    },
];

export default function Header(props) {
    return (
        <header className={styles.Header}>
            <AppHead
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Link href="/">
                <a className={styles.Logo}>{siteData.siteName}</a>
            </Link>

            <nav className={styles.Nav}>
                {navLinks.map(({ name, url }) => (
                    <Link href={url}>
                        <a className={styles.NavLink}>{name}</a>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
