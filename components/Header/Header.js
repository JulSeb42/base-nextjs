// Packages
import { useState } from "react";

// Components
import Link from "next/link";

// Data
import siteData from "../SiteData";

// Styles
import styles from "../../styles/modules/Header.module.scss";

// Nav links
const navLinks = [
    {
        id: 0,
        name: "Home",
        url: "/",
    },
];

export default function Header() {
    // Hamburger navigation on mobile
    const [isNav, setIsNav] = useState(false);
    const contentNav = isNav
        ? `${styles["MenuOpen"]} ${styles.Nav}`
        : styles.Nav;

    // Burger component
    const Burger = () => {
        return (
            <div className={styles.Burger} onClick={() => setIsNav(!isNav)}>
                <span />
                <span />
                <span />
            </div>
        );
    };

    return (
        <header className={styles.Header}>
            <Link href="/">
                <a className={styles.Logo}>{siteData.siteName}</a>
            </Link>

            <Burger />

            <nav className={`${styles.Nav} ${contentNav}`}>
                {navLinks.map(({ name, url, id }) => (
                    <Link href={url} key={id}>
                        <a className={styles.NavLink}>{name}</a>
                    </Link>
                ))}
            </nav>
        </header>
    );
}
