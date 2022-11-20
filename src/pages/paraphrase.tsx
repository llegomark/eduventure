import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const Paraphrase: NextPage = () => {
    const { data: session } = useSession();
    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Paraphrasing Tool - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Paraphrasing Tool"
            />
            <Students
                title="Our AI-Powered Paraphrasing Tool Will Enhance Your Writing"
                description="Paraphrase your text to make it unique and plagiarism-free. Simple and easy to use."
                url="/api/paraphraser"
                disableSubmit={150}
                placeholder="Paste your text here..."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Paraphrase