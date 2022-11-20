import Link from "next/link";
import { signOut, useSession } from "next-auth/react"

export default function Copyright() {
    const { data: session } = useSession()
    return (
        <>
            <div className="mt-1 self-end">
                <p className="text-neutral-800 dark:text-neutral-400 text-xs sm:text-xs invisible sm:visible">
                    Welcome, {session?.user?.name}! You are signed in as {session?.user?.email}.
                    {" | "}
                    <Link
                        href="/api/auth/signout"
                        passHref={true}
                        onClick={(e) => {
                            e.preventDefault()
                            signOut()
                        }}
                        className="text-blue-500 hover:text-blue-600 dark:text-neutral-300 dark:hover:text-neutral-100">
                        Sign Out
                    </Link>
                </p>
            </div>
        </>
    )
}