import Link from "next/link";

export default function Footer() {
    return (
        <div className="text-xs sm:text-sm z-10 fixed bottom-0 px-4 sm:px-8 sm:py-4 py-2 text-center w-screen bg-white dark:bg-neutral-800">
            <p className="text-neutral-700 dark:text-neutral-300">
                <Link
                    href="/"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Study Notes
                </Link>
                {" | "}
                <Link
                    href="/ask"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Ask Mark
                </Link>
                {" | "}
                <Link
                    href="/grammar"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Grammar Checker
                </Link>
                {" | "}
                <Link
                    href="/paraphrase"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Paraphrasing Tool
                </Link>
                {" | "}
                <Link
                    href="/summarizer"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Text Summarizer
                </Link>
                {" | "}
                <Link
                    href="/thirdperson"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Third-Person POV
                </Link>
                {" | "}
                <Link
                    href="/essay"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Essay Outline
                </Link>
                {" | "}
                <Link
                    href="/translate"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Translate
                </Link>
                {" | "}
                <Link
                    href="/stories"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Story Ideas
                </Link>
                {" | "}
                <Link
                    href="/tagalogstories"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Kuwento
                </Link>
                {" | "}
                <Link
                    href="/homework"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Homework
                </Link>
                {" | "}
                <Link
                    href="/notes"
                    passHref={true}
                    className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                    Notes
                </Link>
            </p>
        </div>
    );
}