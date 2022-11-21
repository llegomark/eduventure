import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/access-denied";

const Homework: NextPage = () => {
    const { data: session } = useSession();
    if (!session) {
        return <AccessDenied />;
    }

    return (
        <>
            <Meta
                title="Homework Help - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/eduventure.png"
            />
            <Navigation
                title="Homework Help"
            />
            <Students
                title="Need help with your homework? Ask us anything!"
                description="Type or paste your homework question one at a time below, and our machine-learning algorithm will find the best answer for you. Remember, the more specific you are, the better the answer will be. Use prompts like 'What is the difference between...', 'Write a...', 'Create a...', or 'How do you calculate...' to get the best results."
                url="/api/homework"
                disableSubmit={150}
                placeholder="Example: What is the difference between a noun and a verb?, How do you calculate the area of a circle?, Write a paragraph about your favorite subject, etc."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Homework