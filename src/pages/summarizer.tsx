import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/utils/access-denied";

const Summarizer: NextPage = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    if (loading) {
        return null;
    }

    if (typeof window === "undefined") return null

    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Text Summarizer - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Text Summarizer"
            />
            <Students
                title="Needing a Summary? We Got You Covered!"
                description="Our machine-learning algorithm can summarize any text for you in seconds."
                url="/api/summarizer"
                disableSubmit={500}
                placeholder="Paste your text here..."
                wordscount={500}
            />
            <Footer />
        </>
    )
}

export default Summarizer