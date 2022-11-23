import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/utils/access-denied";

const Translate: NextPage = () => {
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
                title="Filipino Translator - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Filipino Translator"
            />
            <Students
                title="Translate your text from any foreign language to Filipino"
                description="Our machine-learning algorithm can translate your text to Filipino, which is helpful for people who want to learn the language or translate their text."
                url="/api/translate"
                disableSubmit={150}
                placeholder="Start by writing or pasting your text here..."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Translate