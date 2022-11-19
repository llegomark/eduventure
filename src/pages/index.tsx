import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";

const Home: NextPage = () => {
  return (
    <>
      <Meta
        title="Study Notes Made Easy - Llego AI"
        description="Llego AI is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
        url="https://app.markllego.com"
        image="https://app.markllego.com/images/markllego.jpg"
      />
      <Navigation
        title="Study Notes"
      />
      <Students
        title="Study Notes Made Easy"
        description="Our machine-learning algorithm can generate study notes for you on any topic you want. Creating study notes has never been this easy. Try it out and see how it works!"
        url="/api/studynotes"
        disableSubmit={150}
        placeholder="Example: Ancient Rome, Julius Caesar, Planet Jupiter, The Great Pyramid of Giza, etc."
        wordscount={150}
      />
      <Footer />
    </>
  )
}

export default Home