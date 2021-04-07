import Header from "../../components/header"
import Layout from "../../components/layout"
import { getAllPostSlugs, getPostdata } from "../../lib/posts";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string"
import hydrate from "next-mdx-remote/hydrate"

// Import all components used in MDX files here
const components = {Header, Layout}

export default function Posts({ source, frontMatter }) {
    const content = hydrate(source, { components });
    return (
        <Layout title={frontMatter.title}>
            <h1>{frontMatter.title}</h1>
            {content}
        </Layout>
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