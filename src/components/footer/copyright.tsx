import Link from "next/link";
import Status from "../buttons/status";

export default function Copyright() {
    return (
        <>
            <div className="mt-1 self-end">
                <p className="text-neutral-800 dark:text-neutral-400 text-xs sm:text-xs invisible sm:visible">
                    Made with <span role="img" aria-label="heart"> ❤️ </span> by{" "}
                    <Link
                        href="https://www.facebook.com/markllego/"
                        target={"_blank"}
                        className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                        Mark Anthony Llego{" "}
                    </Link>
                    <Status />
                </p>
            </div>
        </>
    )
}