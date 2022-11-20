import Head from "next/head";

interface MetaTagsProps {
    title: string;
    description: string;
    url: string;
    image: string;
}

export default function Meta(props: MetaTagsProps) {
    return (
        <Head>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <link rel="icon" href="/favicon.ico" />
            <meta name="robots" content="noindex, nofollow" />
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={props.url} />
            <meta property="og:title" content={props.title} />
            <meta property="og:description" content={props.description} />
            <meta property="og:image" content={props.image} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={props.url} />
            <meta property="twitter:title" content={props.title} />
            <meta property="twitter:description" content={props.description} />
            <meta property="twitter:image" content={props.image} />
        </Head>
    );
}