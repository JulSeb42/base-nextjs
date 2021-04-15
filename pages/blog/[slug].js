// Components
import Header from "../../components/Header";
import Footer from "../../components/Footer"

// MDX components
import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";

// Styles
import styles from "../../styles/modules/Blog.module.scss"

// Import all components used in MDX files here
const components = {};

export default function Posts({ source, frontMatter }) {
    const content = hydrate(source, { components });
    return (
        <div className={styles.Wrapper}>
            <Header
                title={frontMatter.title}
                description={frontMatter.description}
                keywords={frontMatter.keywords}
            />

            <main className={styles.Container}>
                <h1>{frontMatter.title}</h1>
                {content}
            </main>

            <Footer />
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    const postContent = await getPostdata(params.slug);
    const { data, content } = matter(postContent);
    const mdxSource = await renderToString(content, {
        components,
        scope: data,
    });
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
}
