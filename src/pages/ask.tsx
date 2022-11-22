import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const Ask: NextPage = () => {
    const { data: session, status } = useSession();
    const loading = status === "loading";

    if (loading) {
        return null;
    }

    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Ask Mark - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Ask Mark"
            />
            <Students
                title="Do you have any questions for Mark? Ask him anything!"
                description="Use WH-questions, ask me to write something or anything under the sun, and I will attempt to answer your questions 'sarcastically' or 'seriously' and do the task for you."
                url="/api/chatbot"
                disableSubmit={100}
                placeholder="Why did Ferdinand Magellan colonize the Philippines?, Is Ferdinand Marcos Sr. a hero?, write me a poem, etc."
                wordscount={100}
            />
            <Footer />
        </>
    )
}

export default Ask