import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";

const Homework: NextPage = () => {
    return (
        <>
            <Meta
                title="Homework Help - Mark Anthony Llego"
                description="Mark Anthony Llego is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://app.markllego.com"
                image="https://app.markllego.com/images/markllego.jpg"
            />
            <Navigation
                title="Homework Help"
            />
            <Students
                title="Need help with your homework? Ask us anything!"
                description="Type or paste your homework question one at a time below, and our machine-learning algorithm will find the best answer for you. Remember, the more specific you are, the better the answer will be."
                url="/api/homework"
                disableSubmit={150}
                placeholder="Example: Desmond took a math test and got 45 correct and 20 incorrect answers. What was the percentage of correct answers?"
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default Homework