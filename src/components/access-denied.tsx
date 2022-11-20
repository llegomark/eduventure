import { getProviders, signIn } from "next-auth/react"
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
            <Navigation
                title="Login Required"
            />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <h1 className="text-6xl font-bold">
                        Access Denied
                    </h1>
                    <div className="mt-3 text-2xl">
                        You are not authorized to view this page.
                    </div>
                    <div className="mt-3 text-2xl">
                        Please{" "}
                        <Link
                            href="/api/auth/signin"
                            className="text-blue-600 hover:underline">sign in with your Google account
                        </Link>{" "}
                        to continue.
                    </div>
                </main>
            </div>
            <Footer />
        </>
    )
}