import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";

const Summarizer: NextPage = () => {
    return (
        <>
            <Meta
                title="Text Summarizer - Mark Anthony Llego"
                description="Mark Anthony Llego is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://app.markllego.com"
                image="https://app.markllego.com/images/markllego.jpg"
            />
            <Navigation
                title="Text Summarizer"
            />
            <Students
                title="Needing a Summary? We Got You Covered!"
                description="Our machine-learning algorithm can summarize any text for you in seconds."
                url="/api/summarizer"
                disableSubmit={150}
                placeholder="Paste your text here..."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Summarizer