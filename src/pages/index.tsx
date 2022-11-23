import { type NextPage } from "next";
import Meta from "../components/meta/metatags";
import Navigation from "../components/navigation/nav";
import Students from "../components/forms/students";
import Footer from "../components/footer/footer";
import { useSession } from "next-auth/react";
import AccessDenied from "../components/utils/access-denied";

const Home: NextPage = () => {
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
        title="Study Notes Made Easy - Eduventure"
        description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
        url="https://dash.eduventure.app"
        image="https://dash.eduventure.app/images/eduventure.png"
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