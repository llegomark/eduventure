import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const Grammar: NextPage = () => {
    const { data: session } = useSession();
    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Grammar Checker - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/markllego.jpg"
            />
            <Navigation
                title="Grammar Checker"
            />
            <Students
                title="Need help with your grammar? Let our AI help you!"
                description="Our machine-learning algorithm can help you improve your writing skills. It will check your grammar and spelling and give you the confidence to write error-free."
                url="/api/grammar"
                disableSubmit={150}
                placeholder="Start by writing or pasting your text here..."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Grammar