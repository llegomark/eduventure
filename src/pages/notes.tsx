import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Mynotes from "../components/forms/notesgen";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const Notes: NextPage = () => {
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
                title="Saved Notes - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Saved Notes"
            />
            <Mynotes
                title="Save Your Notes Easily"
                description="Save your notes here, and you can access them anytime you want. Your notes will only be accessible in your browser and nowhere else. If you change your browser or device, your notes will not automatically synchronize. If you clear your browser history, your notes will be deleted."
                placeholder="Paste or type your notes here..."
            />
            <Footer />
        </>
    )
}

export default Notes