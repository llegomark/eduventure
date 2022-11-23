import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/utils/access-denied";

const Essay: NextPage = () => {
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
                title="Essay Outline - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Essay Outline"
            />
            <Students
                title="Looking for an essay outline? We got you covered!"
                description="Our machine-learning algorithm can generate an essay outline for you in seconds. Just enter a topic and click generate!"
                url="/api/essayoutline"
                disableSubmit={75}
                placeholder="Human Rights Violations in the Philippines, The Great Depression, etc."
                wordscount={75}
            />
            <Footer />
        </>
    )
}

export default Essay