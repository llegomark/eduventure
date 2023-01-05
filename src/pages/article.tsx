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
                title="Article Writer - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Article Writer"
            />
            <Students
                title="Revolutionize Your Writing with Eduventure&apos;s AI-Powered Article Writer - Say Goodbye to Writer&apos;s Block Forever!"
                description="Are you tired of struggling to come up with fresh, engaging content for your articles? Look no further! With Eduventure&apos;s AI-powered article writer, you can easily create high-quality, unique content in no time. Simply enter your topic and let our AI do the rest."
                url="/api/articles"
                disableSubmit={75}
                placeholder="Type the topic or your article title here..."
                wordscount={75}
            />
            <Footer />
        </>
    )
}

export default Translate