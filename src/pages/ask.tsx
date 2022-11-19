import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";

const Ask: NextPage = () => {
    return (
        <>
            <Meta
                title="Ask Mark - Llego AI"
                description="Llego AI is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://app.markllego.com"
                image="https://app.markllego.com/images/markllego.jpg"
            />
            <Navigation
                title="Ask Mark"
            />
            <Students
                title="Do you have any questions? Ask it here!"
                description="Use WH-questions, ask me to write something or anything under the sun, and I will attempt to answer your questions sarcastically or seriously and do the task for you."
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