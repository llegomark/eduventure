import Link from "next/link";
import { signOut, useSession } from "next-auth/react"

export default function Copyright() {
    const { data: sessionData } = useSession();
    return (
        <>
            <div className="mt-1 self-end">
                <p className="text-neutral-800 dark:text-neutral-400 text-xs mb-2">
                    Welcome, {sessionData?.user?.name}! {" "}
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