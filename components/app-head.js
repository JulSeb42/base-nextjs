import Head from "next/head"

// Data
const siteTitle = "Blog Next.js"
const siteAuthor = "Julien Sebag"
const siteType = "blog"
const siteCover = ""
const siteLanguage = "en_EN"

export default function AppHead(props) {
    return (
        <Head>
            <title>{props.title} | {siteTitle}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="author" content={siteAuthor} />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content={siteType} />
            <meta property="og:url" content="Page url" />
            <meta property="og:image" content={siteCover} />
            <meta property="og:site_name" content={siteTitle} />
            <meta property="og:locale" content={siteLanguage} />
        </Head>
    );
}