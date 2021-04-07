import Layout from "../components/layout"
import Link from "next/link"
import { getSortedPosts } from "../lib/posts"

export default function Home({allPostsData}) {
    return (
        <Layout
            title="Homepage"
            description="Page description"
            keywords="keyword, keyword"
        >
            <h1>Site title</h1>

            <h2>Posts</h2>

            {allPostsData.map(({ slug, date, title, excerpt }) => (
                <section key={slug}>
                    <Link key={slug} href="/blog/[slug]" as={`/blog/${slug}`}>
                        <a>{title}</a>
                    </Link>
                </section>
            ))}
        </Layout>
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