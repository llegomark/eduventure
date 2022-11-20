import Navigation from "../components/navigation/nav";
import Footer from "../components/footer/footer";
import Link from "next/link";
import Meta from "./meta/metatags";

export default function AccessDenied() {
    return (
        <>
            <Meta
                title="Login Required - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/markllego.jpg"
            />
            <Navigation />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <h1 className="text-6xl font-bold">
                        Welcome to Eduventure!
                    </h1>
                    <div className="mt-3 text-2xl">
                        Please{" "}
                        <Link
                            href="/api/auth/signin"
                            className="text-blue-600 hover:underline">sign in with your Google or Discord account
                        </Link>{" "}
                        to continue.
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}