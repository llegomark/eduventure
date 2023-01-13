import Navigation from "../navigation/nav";
import Footer from "../footer/footer";
import Meta from "../meta/metatags";
import { signIn } from 'next-auth/react'
import Link from "next/link";

export default function AccessDenied() {
    return (
        <>
            <Meta
                title="Make Learning Easier With Eduventure - Eduventure"
                description="Eduventure is the perfect website for students who want to get ahead in their studies using AI services. The website offers various services, including a grammar checker, a paraphrasing tool, and even studying for exams. The website is easy to use, and students can start immediately. The prices are reasonable, and the quality of the services is excellent."
                url="https://dash.eduventure.app"
                image="https://dash.eduventure.app/images/markllego.jpg"
            />
            <Navigation
                title="Welcome"
            />
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-center">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                        MAKE LEARNING EASIER WITH EDUVENTURE
                    </h1>
                    <div className="mt-3 text-base font-bold">
                        <button type="button"
                            onClick={() => signIn('google')}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign in with Google
                        </button>
                    </div>
                    <div className="mt-3 text-base font-bold">
                        <button type="button"
                            onClick={() => signIn('discord')}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                            Sign in with Discord
                        </button>
                    </div>
                    <p className="mt-5 text-xs">
                        {/* Made with <span role="img" aria-label="heart"> ❤️ </span> by{" "} */}
                        <Link
                            href="https://docs.eduventure.app/privacy"
                            target={"_blank"}
                            className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                            Privacy Policy
                        </Link>
                    </p>
                </main>
            </div>
            <Footer />
        </>
    )
}