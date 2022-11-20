import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Footer from "../components/footer/footer";
import StoriesGenerator from "../components/forms/stories";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const TagalogStories: NextPage = () => {
    const { data: session } = useSession();
    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Mga Kuwento - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/markllego.jpg"
            />
            <Navigation />
            <StoriesGenerator
                title="Sumulat ng Kuwento sa Tagalog"
                description="This is a beta version and not all features are available yet. For best results, try typing your input in English."
                url="/api/tagalog"
                disableSubmit={150}
                placeholder="Isulat ang iyong ideya ng kuwento dito. Halimbawa, Magnanakaw si Imelda Marcos, Juana at ang mga Kambal, etc."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default TagalogStories
