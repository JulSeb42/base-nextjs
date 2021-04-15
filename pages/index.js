// Imports
import Header from "../components/Header";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Link from "next/link";

// Blog
import { getSortedPosts } from "../lib/posts";

// Data
import SiteData from "../components/SiteData";

// Styles
import styles from "../styles/modules/Home.module.scss";

export default function Home({ allPostsData }) {
    return (
        <div className={styles.Wrapper}>
            <Header title="Home" description="" keywords="" />

            <Container>
                <h1>{SiteData.siteName}</h1>

                <h2>Posts</h2>

                {allPostsData.map(({ slug, date, title, excerpt }) => (
                    <section key={slug}>
                        <Link
                            key={slug}
                            href="/blog/[slug]"
                            as={`/blog/${slug}`}
                        >
                            <a>{title}</a>
                        </Link>
                    </section>
                ))}
            </Container>

            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const allPostsData = getSortedPosts();
    return {
        props: {
            allPostsData,
        },
    };
}
