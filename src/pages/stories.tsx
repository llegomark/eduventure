import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Footer from "../components/footer/footer";
import StoriesGenerator from "../components/forms/stories";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/utils/access-denied";

const Stories: NextPage = () => {
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
                title="Story Ideas - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Story Ideas"
            />
            <StoriesGenerator
                title="Are you stuck on a story idea? Let us help you!"
                description="Our machine-learning algorithm can generate original and plagiarism-free stories for you. Be creative with your inputs and see what you can come up with."
                url="/api/stories"
                disableSubmit={150}
                placeholder="Type any short idea you have in mind here, or use the elements of a story, such as setting, characters, plot, theme, conflict, and resolution."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Stories
