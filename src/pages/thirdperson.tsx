import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";

const ThirdPerson: NextPage = () => {
    return (
        <>
            <Meta
                title="Third-Person POV - Mark Anthony Llego"
                description="Mark Anthony Llego is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://app.markllego.com"
                image="https://app.markllego.com/images/markllego.jpg"
            />
            <Navigation
                title="Third-Person POV"
            />
            <Students
                title="Converts First-Person POV to the Third-Person POV"
                description="This tool will quickly change the point of view in your text from the first person to the third person."
                url="/api/thirdperson"
                disableSubmit={150}
                placeholder="Start by writing or pasting your text here..."
                wordscount={150}
            />
            <Footer />
        </>
    )
}

export default ThirdPerson